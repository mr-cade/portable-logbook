var Sequelize = require("sequelize")

require("../routes/html-routes.js");

module.exports = function (sequelize, DataTypes) {
  var logbook = sequelize.define("Contact", {
    contactTime: DataTypes.TIME,
    callsign: DataTypes.STRING,
    signalIn: DataTypes.INTEGER,
    signalOut: DataTypes.INTEGER,
    frequency: DataTypes.DECIMAL,
    contactName: DataTypes.STRING,
    contactLocation: DataTypes.STRING,
    contactNotes: DataTypes.STRING
  });
  return logbook
};
