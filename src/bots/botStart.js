const botsantista = require('./bot-santista');
const connection = require('../config/database');
const base = require('../schema/base');



connection.authenticate().then(() => {
    console.log('Servidor Conectado!');
}).catch((error) => {
    console.log(error)
});



async function botStart(){
    const name = await nameProduto;
    const price = await priceProduto;

    base.create({
        produto: name,
        valor: price
    })

}


module.exports = botStart;