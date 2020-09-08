var Sequelize = require("sequelize")

require("../routes/html-routes.js");

module.exports = function (sequelize, DataTypes) {
  var logbook = sequelize.define("logbook", {
    contactTime: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: true
    },
    callsign:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    signalIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    signalOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    frequency: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: false
    },
    mde: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    contactName: DataTypes.STRING,
    contactLocation: DataTypes.STRING,
    contactNotes: DataTypes.STRING
  });
  return logbook
};
