var Sequelize = require("sequelize")
const { INTEGER } = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    var profile = sequelize.define("profile", {
        firstName: {type: DataTypes.STRING},
        lastName: {type: DataTypes.STRING},
        phone: {type: DataTypes.INTEGER},
        mobile: {type: DataTypes.INTEGER},
        email: {type: DataTypes.STRING},
        gateKey: {type: DataTypes.STRING},
        bio: {type: DataTypes.STRING}
    });
    return profile;
}