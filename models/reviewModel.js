module.exports= (sequelize, DataTypes) => {
    const review = sequelize.define('review',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        review:{
            type: DataTypes.STRING,
            allowNull:false
        },
        published:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
        }
    })

    return review
}