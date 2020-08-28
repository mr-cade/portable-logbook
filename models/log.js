var Sequelize = require("sequelize")

require("./routes/html-routes.js")(app);

module.exports = function(sequelize, DataTypes) {
    var Callsign = sequelize.define("Callsign", {
      name: DataTypes.STRING
    });
  
    // Callsign.associate = function(models) {
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    // return Author;
  };
  