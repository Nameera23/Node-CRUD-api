const dbConfig = require('../config/dbConnection.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases: false,
        
        pool:{
            min: dbConfig.min,
            max: dbConfig.max,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() =>{
    console.log('connected')
})
.catch(err =>{
    console.log("Error:"+ err)
})

const db= {}

db.Sequelize = Sequelize
db.sequelize= sequelize

db.user = require('./User.js')(sequelize,DataTypes)
db.review = require('./reviewModel.js')(sequelize,DataTypes)

// usage of force: false is to not lose previous information
db.sequelize.sync({force: false})
.then(() =>{
    console.log("yes sync is done")
})

module.exports=db