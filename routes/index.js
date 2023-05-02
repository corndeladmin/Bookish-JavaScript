const express = require('express')
const app = express();
const { Book } = require('../models/book')

app.get('/books', async (req, res) => {
  const books = await Book.findAll()
  res.json(books)
})

export default app;