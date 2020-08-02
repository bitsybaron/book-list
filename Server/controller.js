const books = require('./books.json');
let id = 5;

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
    deleteBook: (req, res) => {
      const {id} = req.params;
      const index = books.findIndex(book => book.id === +id);
      if (index === -1) {
          res.status(404).send('That book does not exist on this list');
      } else {
        books.splice(index, 1);
        res.status(200).send(books);
      } 
    },
    addBook: (req, res) => {
        const {title, author, bookImg, review} = req.body;
        if (title == '' || author == '' || bookImg == '' || review == '')  {
            res.status(401).send("You must fill in all the forms.")
        } else {
            const newBook = {
                id,
                title,
                author, 
                review,
                bookImg
            }
            books.push(newBook);
            id++;
            res.status(200).send(books)
    }},
    reviewEdit: (req, res) => {
        const {id} = req.params;
        const index = books.findIndex(book => book.id === +id);
        if (index === -1) {
            res.status(404).send('Cannot edit this book')
        } else {
            books[index].review = req.body.edit;
            console.log(req.body.review)
            res.status(200).send(books)
        }
    }

}
