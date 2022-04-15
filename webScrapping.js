
//console.log('Commit second')
// // creating Heading
// writeStream.write(`Name, age, sex \n`)

// const name ="heisarki"
// for (i = 0; i < 20; i++){
//   writeStream.write(`${name},${i+20}, male \n`)
// }
// console.log('Writing done..')

/*

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const URL = "https://www.hindustantimes.com/india-news"

app.listen(5000, () => console.log(`Server online on PORT 5000`))

// Test
axios(URL).then(res => {
  const html = res.data;
  const $ = cheerio.load(html)
  console.log("Test")
  
  //const array = []
  const newsData = $('.listView')
  console.log(newsData.toString())
  writeStream.write(newsData.toString())
}).catch((error)=> {
  console.log({message: error.message})
})

//////////////////////////////////////////
// Axios call to get News data
app.get('/news',async (req, res) => {

  let array = []
  await axios(URL).then(res => {
    const html = res.data;
    const $ = cheerio.load(html)

    const newsData = $('.listview').children().text();
    console.log(newsData)

    $('.listView', html).each((i, el) => {
      const title = $(el).find('.pt10').text()
      const description = $(el).find('.hdg3').text()
      const url = "https://www.hindustantimes.com/india-news" + $(el).children('.hdg3').find('a').attr('href')
      array.push({
        title,
        description,
        url
      })
      // array = [...array, url]
    })
    // console.log(array)
  
  }).catch((err) => {
    console.log({message: err.message})
  })
  //Send response to Client
  res.json(array)
  console.log(array.length)
})
console.log('Done')

*/