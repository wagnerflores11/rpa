const axios = require('axios')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const base = require('../schema/base')
const connection = require('../config/database');



connection.authenticate().then(() => {
    console.log('Servidor Conectado!');
}).catch((error) => {
    console.log(error)
});


const dados = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const botsantista = async () => {
    const page = await dados('https://url')
    const $ = cheerio.load(page)

    const nameProduto = []
    const priceProduto = []


    $('div.bq6m6y-4.dFQDmu').each((i, e) => {
        // extraindo os nomes dos produtos do site
        $('a > div.znbzn-7.gbEUzf > div.znbzn-2.eInOmt > p').each(function (index) {
            nameProduto[index] = $(this).text();
        });

        // extraindo os valores do site
        $('a > div.znbzn-7.gbEUzf > p > span.sc-181waw4-0.bfbPNo').each(function (index) {
            priceProduto[index] = $(this).text();
        });

        base.create({
            produto: nameProduto,
            valor: priceProduto
        })    
        
    })

    
}

module.exports = botsantista;