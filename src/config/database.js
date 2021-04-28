const Sequelize = require('sequelize');


let user = process.env.USER;
let password = process.env.PASSWORD;
let server = process.env.SERVER;
let database = process.env.DATABASE;

if(process.env.AMBIENTE !== 'producao'){
    require('dotenv').config();
    user = process.env.USER;
    password = process.env.PASSWORD;
    server = process.env.SERVER;
    database = process.env.DATABASE;
}else{
    user = process.env.USER;
    password = process.env.PASSWORD;
    server = process.env.SERVER;
    database = process.env.DATABASE;
}


const connection = new Sequelize(database, user, password,{
    host: 'localhost',
    dialect:'mysql',
    timezone:'-03:00',
    logging:false,
    define: {
        timestamps: false
    }
});

module.exports = connection;
