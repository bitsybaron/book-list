const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/books', ctrl.getBooks);
app.delete('/api/books/:id', ctrl.deleteBook);
app.post('/api/books', ctrl.addBook);
app.put('/api/books/update/:id', ctrl.reviewEdit)


app.listen(port, () => console.log("Server boi running on port " + port));