

module.exports = (sequelize, DataTypes) => {

    const educationDetail = sequelize.define("educationDetail", {
        school: {
            type: DataTypes.STRING,
            allowNull: false
        },
        highschool: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schoolmark: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        highschoolmark: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return educationDetail;
}