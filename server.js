// Creating file and writing to that file

console.log('2nd commit')
// const fs = require('fs')
// const writeStream = fs.createWriteStream('new.html')

console.log('KHASI NEWS APIs')

const express = require('express')
const app = express()

const cheerio = require('cheerio')
const axios = require('axios')
const mongoose = require('mongoose')

const PORT = 5000;
// app.listen(PORT, () => console.log('Server online on PORT 5000'))
// db.once('open', () => console.log("Mongodb connected"))
// db.on('error', (error) => console.log({ message: error.message }))

//Mongoose Connection
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/news', { useNewUrlParser: true })
  .then(()=>app.listen(PORT, () => console.log('Server online on PORT 5000')))
  .catch((error) => console.log({message: error.message}))


const newsModels = require('./models/newsModel')
app.get('/news', async(req, res) => {
  try {
    const findData = await newsModels.find() 
    res.json(findData)

    findData.forEach(
      (data) => console.log(data.readMore)
    )
    console.log(findData.length)

    // console.log(findData[0]._id)
  } catch {
    (error) => {
      console.log({message: error.message})
    }
  }
})


//Getting the data from Rupang website 
const rupang = require('./news/rupang')
rupang.rupang();
//setTimeout(()=>console.log(rupang.array[0]), 2000)





/////////////Testing Code
// const URL = "https://www.urupang.com/"; 
// const getData = () => axios(URL)
//   .then(
//     res => {
//       return res;
//     }
//   )
//   .catch((error => {
//   console.log({message: error.message})
//   }))

// app.get('/', async (req, res) => {
//   try {
//     const data = await getData()
//     const html = data.data
//     // writeStream.write(data.data.toString())
//     const $ = cheerio.load(html)

//     const post = $('.post-98376')
//     const title = $('.post-98307').children().find('h2').text();
//     const readMore = $('.post-98307').children().find('h2 a').attr('href')

//     //onsole.log($('.post').toString())

//     res.send(post.toString())
//   }
//   catch (error) {
//     console.log({message: error.message})
//   }
  
// })

