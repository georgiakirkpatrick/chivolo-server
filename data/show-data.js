const apiKey = process.env.API_KEY

const allShowData = [
  {
    playlistTitle: "Bino and Fino",
    playlistId: "PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X",
    recommendedMinAge: 1,
    iconImg: "images/bino-and-fino.png",
    imgAlt: "Bino-and-Fino",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C42sM5hjoKxgpYA606Q4KK8X&maxResults=20`
  },

  {
    playlistTitle: "Andi Mack",
    playlistId: "PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb",
    recommendedMinAge: 10,
    iconImg: "images/andi-mack.png",
    imgAlt: "Andi-Mack",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLiv1IUQDVSNLrez97DYcPXJ4swHBaZDlb&maxResults=20`
  },

  {
    playlistTitle: "Blue's Clues",
    playlistId: "PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW",
    recommendedMinAge: 1,
    iconImg: "images/blues-clues.png",
    imgAlt: "Blues-Clues",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFH8-E_Oz2_G1scCUuYV_WW&maxResults=20`
  },

  {
    playlistTitle: "Burka Avenger",
    playlistId: "PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot",
    recommendedMinAge: 7,
    iconImg: "images/burka-avenger.png",
    imgAlt: "Burka-Avenger",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C41AX7zXnbq9DO5SQvuwd0ot&maxResults=20`
  },

  {
    playlistTitle: "Chhota Bheem",
    playlistId: "PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev",
    recommendedMinAge: 3,
    iconImg: "images/chhota-bheem.png",
    imgAlt: "Chhota-Bheem",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL0rMr_qVm_FLXkMOjpPleUrdD4GvHwYev&maxResults=20`
  },

  {
    playlistTitle: "Dinosaur Train",
    playlistId: "PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE",
    recommendedMinAge: 1,
    iconImg: "images/dinosaur-train.png",
    imgAlt: "Dinosaur-Train",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLa8HWWMcQEGRwHO2UzoBBWnbByuCpbRAE&maxResults=20`
  },

  {
    playlistTitle: "Doc McStuffins",
    playlistId: "PL3ADDC3A56EAFB37C",
    recommendedMinAge: 4,
    iconImg: "images/doc-mcstuffins.png",
    imgAlt: "Doc-McStuffins",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3ADDC3A56EAFB37C&maxResults=20`
  },

  {
    playlistTitle: "Dora and Friends",
    playlistId: "PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi",
    recommendedMinAge: 5,
    iconImg: "images/dora-and-friends.png",
    imgAlt: "Dora-and-Friends",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFXgXVoF4cB6Wd1cjy50goi&maxResults=20`
  },

  {
    playlistTitle: "Elena of Avalor",
    playlistId: "PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ",
    recommendedMinAge: 5,
    iconImg: "images/elena-of-avalor.png",
    imgAlt: "Elena-of-Avalor",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL2m1vjiMH_hPMvLfmmiMXQUIVMrr_JovZ&maxResults=20`
  },

  {
    playlistTitle: "Legendary Dudas",
    playlistId: "PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs",
    recommendedMinAge: 9,
    iconImg: "images/legendary-dudas.png",
    imgAlt: "Legendary-Dudas",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLJb1AL9zU1GqdTD3cvhjRCEHaxYBXUlXs&maxResults=20`
  },

  {
    playlistTitle: "Molly of Denali",
    playlistId: "PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs",
    recommendedMinAge: 5,
    iconImg: "images/molly-of-denali.png",
    imgAlt: "Molly-of-Denali",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLWpyJMXD1C42wh_BKrkVw1aC8znACSIUs&maxResults=20`
  },

  {
    playlistTitle: "Mouk",
    playlistId: "PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU",
    recommendedMinAge: 4,
    iconImg: "images/mouk.png",
    imgAlt: "Mouk",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLbsU5JkEtkPQPQJBG52a1k9KckIQbuTaU&maxResults=20`
  },

  {
    playlistTitle: "Nella the Princess Knight",
    playlistId: "PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb",
    recommendedMinAge: 1,
    iconImg: "images/nella-the-princess-knight.png",
    imgAlt: "Nella-the-Princess-Knight",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL3qHjxSSl7AFFYNsE2JNvFI_S8Q2Xw0jb&maxResults=20`
  },

  {
    playlistTitle: "Nina's World",
    playlistId: "PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G",
    recommendedMinAge: 1,
    iconImg: "images/ninas-world.png",
    imgAlt: "Ninas-World",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL_EANcmOcL7JcpmtUW6bRpPz6ov6UW55G&maxResults=20`
  },

  {
    playlistTitle: "Sci Girls",
    playlistId: "PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS",
    recommendedMinAge: 7,
    iconImg: "images/scigirls.png",
    imgAlt: "Sci-Girls",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLeE9Z9we25wQVs5-eyjeq_aWLUin0PQeS&maxResults=20`
  },

  {
    playlistTitle: "Sesame Street",
    playlistId: "PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM",
    recommendedMinAge: 1,
    iconImg: "images/sesame-street.png",
    imgAlt: "Sesame-Street",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL8TioFHubWFuzQJ8mGfvjv70pmuorq-ZM&maxResults=20`
  },

  {
    playlistTitle: "Super Wings",
    playlistId: "PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5",
    recommendedMinAge: 1,
    iconImg: "images/super-wings.png",
    imgAlt: "Super-Wings",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PL-nQOC8BAGD0YFJqr1R_XTbjokhRh2jv5&maxResults=20`
  },

  {
    playlistTitle: "Yo Gabba Gabba",
    playlistId: "PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N",
    recommendedMinAge: 1,
    iconImg: "images/yo-gabba-gabba.png",
    imgAlt: "Yo-Gabba-Gabba",
    apiUrl: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}&playlistId=PLc7QkGFtZUZ73cexJsrEzjXkiKxv5qi_N&maxResults=20`
  }
]

module.exports = allShowData