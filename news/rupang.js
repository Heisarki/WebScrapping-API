const axios = require('axios')
const cheerio = require('cheerio')
const newsElement = require('../models/newsModel')
const mongoose = require('mongoose')
const URL = "https://www.urupang.com/"

// const newEntry = new newsElement({
//                 title: "test",
//                 readMore: "readMore",
//                 datePublished: "datePublished",
//                 description: "description"

// })
// newEntry.save();


const getData = () =>axios(URL)
  .then(
      res => {
     return res;
    }
  )
  .catch((error => {
  console.log({message: error.message})
  }))

let array = []


const rupang = async () => { 
    const data = await getData()
    const html = data.data
    const $ = cheerio.load(html) 
    
    $('.post', html).each((i, el) => {
        try {
            const title = $(el).children().find('h2').text();
            const readMore = $(el).children().find('h2 a').attr('href')
            const datePublished = $(el).children().find('p time').text()
            const description = $(el).find('.entry-content').text()

            
            const newData = new newsElement({
                title,
                readMore,
                datePublished,
                description,
                count: i
            })
            try {
                newData.save()
                console.log(`${i} Data Save to Database...`)
            }catch (error) {
                console.log({ message: error.message })
            }
            

            array.push({
                title,
                readMore,
                datePublished,
                description
            })
        }
        catch (error) {
            console.log({ message: error.message })
        }
    })
    
}

// setTimeout(()=>console.log(array), 2000)
module.exports = {
    rupang,
    array
}
