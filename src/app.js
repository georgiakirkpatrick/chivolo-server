const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const allShowData = require("../data/show-data")

let lastAPIFetchDate = new Date("2020-12-01T03:24:00")
let storedShowData = []

const app = express()

const compareDates = () => {
  const dd = date => String(date.getUTCDate()).padStart(2, '0')
  const mm = date => String(date.getUTCMonth() + 1).padStart(2, '0')
  const yyyy = date => date.getUTCFullYear()
  const today = new Date()

  if (yyyy(today) > yyyy(lastAPIFetchDate)) {
    return true
  } else if (yyyy(today) === yyyy(lastAPIFetchDate) && mm(today) > mm(lastAPIFetchDate)) {
    return true
  } else if (yyyy(today) === yyyy(lastAPIFetchDate) && mm(today) === mm(lastAPIFetchDate) && dd(today) > dd(lastAPIFetchDate)) {
    return true
  } else {
    return false
  }
}

const fetchAllShowData =  () => {
  const filtered = showItems => showItems.filter(item => item.snippet.title != "Private video")
  const apiKey = process.env.API_KEY
  let responseOk = false

  const promises = allShowData.map(show => (
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=${show.playlistId}&maxResults=20`)
    .then(response => {
      responseOk = response.ok
      if (response.ok) {
        return response.json()
      } else {
        const errorMessage = `Something went wrong.  
          Error code: ${response.status}.  
          Error text: ${response.statusText}.`
        
        next(errorMessage)
      }
    })
    .then(responseJson => {
      const items = responseJson ? filtered(responseJson.items) : []

      return {
        ...show,
        showItems: items
      }
    })
  ))

  const resolvedPromises = Promise.all(promises)
  .then(() => {
    if (responseOk) {
      return Promise.all(promises)
    } else {
      return "There was a problem fetching the show data."
    }
  })

  return resolvedPromises
}

const saveShowData = showData => {
  lastAPIFetchDate = new Date()
  storedShowData.push(...showData)
}  

const sendAllShowData = (req, res, next) => {
  if (compareDates()) {
    fetchAllShowData()
    .then(showData => {
      saveShowData(showData)
      return showData
    })
    .then(showData => {
      res.send(showData)
    })
  } else {
    res.send(storedShowData)
  }
}

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.get("/chivolo", sendAllShowData)

app.use((err, req, res, next) => {
  res.send(err);
})

module.exports = app