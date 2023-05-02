const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://bookish:bookish@localhost:5432/bookish');

sequelize.authenticate()
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Couldn't connect to database"))

export default sequelize;
