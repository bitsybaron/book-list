import React, {Component} from 'react';


class Book extends Component {
    constructor() {
        super();
        this.state = {
            reviewInput: false,
            edit: ''
        }
        this.universalHandler = this.universalHandler.bind(this)
        
    }

    
    reviewEdit() {
        this.setState({reviewInput: !this.state.reviewInput})
    }
    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {book, deleteBook, reviewEdit} = this.props;
        return(
            <div className="book-card">
                <img className="book-img" src={book.bookImg}/>
                <div className="right">
                    <p>{book.title}</p>
                    <p>by {book.author}</p>
                    <p>{book.review}</p>
                </div>
                <p>{this.state.reviewInput ? 
                    <div>
                        <input placeholder="Actually, it was..." name="edit" onChange={this.universalHandler}/> 
                        <button onClick={() => {this.reviewEdit()
                            reviewEdit(book.id, this.state.edit)}}>Update Book Review</button>
                    </div> : null}</p>
                <img class="icon" src="https://img.icons8.com/material-sharp/24/000000/pencil--v2.png" onClick={() => this.reviewEdit()}/>
                <img class="icon" src="https://img.icons8.com/dotty/80/000000/delete-forever.png" onClick={() => deleteBook(book.id)}/>
            </div>
        )
    }
}

export default Book;

