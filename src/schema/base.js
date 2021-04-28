const Sequelize = require('sequelize');
const connection = require('../config/database');



const Base = connection.define('tb_base', {
    valor:{
        type:Sequelize.JSON(),
    },
    produto:{
        type: Sequelize.JSON(),
    },
}, { freezeTableName: true });


module.exports=Base;