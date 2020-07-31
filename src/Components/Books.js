import React, {Component} from 'react';
import Book from './Book'
import NewBook from './NewBook'
import axios from 'axios';

class Books extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
        this.addBook = this.addBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
        this.reviewEdit = this.reviewEdit.bind(this)

    }

    componentDidMount(){
        this.getBooks();
    }

    getBooks = () => {
        axios.get('/api/books')
            .then(res => this.setState({books: res.data}))
            .catch(err => console.log(err))
    } 


    addBook = (e, title, author, review, bookImg) => {
        e.preventDefault()
        axios.post('/api/books', {title, author, review, bookImg})
            .then(res => this.setState({books: res.data}))
            .catch(err => console.log(err));
    }

    deleteBook = (id) => {
        axios.delete(`/api/books/${id}`)
            .then(res => {
                this.setState({books: res.data})
            })
            .catch(err => console.log(err))
    }

    reviewEdit = (id, edit) => {
        console.log(id, edit)
        axios.put(`/api/books/update/${id}`, {edit})
            .then(res => {
                console.log(res.data)
                this.setState({books: res.data})})
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.books)
        const booksMap = this.state.books.map((element, index) => {
            return <Book key={index} book={element} deleteBook={this.deleteBook} reviewEdit={this.reviewEdit}/>
        })
        console.log(booksMap)
        return (
            <div>
                <NewBook books={this.state.books} addBook={this.addBook}/>
                <div>{booksMap}</div>
            </div>
        )
    }
}

export default Books;