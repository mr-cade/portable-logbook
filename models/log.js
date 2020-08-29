var Sequelize = require("sequelize")

require("../routes/html-routes.js");

module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
      contactTime: DataTypes.TIME,
      callsign: DataTypes.STRING,
      signalIn: DataTypes.INTEGER,
      signalOut: DataTypes.INTEGER,
      contactName: DataTypes.STRING,
      contactNotes: DataTypes.STRING
    });
    return Contact
  };
  