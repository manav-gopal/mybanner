const { Sequelize } = require("sequelize");
require("dotenv").config({ path: __dirname + "/../.env" });

// Create a new instance of Sequelize with PostgreSQL configuration
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Use SSL
      rejectUnauthorized: false, // Set to true if you have valid SSL certificates
    },
  },
  logging: console.log, // Enable logging for debugging
});

// Authenticate the connection to verify everything is working
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
