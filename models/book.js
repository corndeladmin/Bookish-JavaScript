import db from "./database"
const { STRING } = require('sequelize')

export const Book = db.define('book', {
    title: {
        type: STRING
    }
},{
    sequelize: db,
    modelName: "book",
    timestamps: false
}

)

