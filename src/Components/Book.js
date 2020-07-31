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
            <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.review}</p>
                <p>{this.state.reviewInput ? 
                    <div>
                        <input name="edit" onChange={this.universalHandler}/> 
                        <button onClick={() => {this.reviewEdit()
                            reviewEdit(book.id, this.state.edit)}}>Save New Review</button>
                    </div> : null}</p>
                <img src="https://img.icons8.com/material-sharp/24/000000/pencil--v2.png" onClick={() => this.reviewEdit()}/>
                <img src={book.bookImg}/>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
        )
    }
}

export default Book;

