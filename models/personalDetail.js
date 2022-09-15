


module.exports = (sequelize, DataTypes) => {
    const PersonalDetail = sequelize.define("PersonalDetail", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })
    return PersonalDetail;
}