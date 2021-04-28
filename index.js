const cron = require('node-cron');
const botSantista = require('./src/bots/bot-santista');



cron.schedule(" */3 * * * *",()=>{
    botSantista();
    console.log('Monitora Preços!');
})