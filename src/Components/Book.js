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
                    <p className="title">{book.title}</p>
                    <p className="author">by {book.author}</p>
                    <p className="question">What did you think?</p>
                    <p>{book.review}</p>
                
                <p>{this.state.reviewInput ? 
                    <div className="toggle">
                        <input placeholder="Actually, it was..." name="edit" onChange={this.universalHandler}/> 
                        <br/>
                        <button className="update-btn" onClick={() => {this.reviewEdit()
                            reviewEdit(book.id, this.state.edit)}}>Update Review</button>
                    </div> : null}</p>
                <div className="icon-wrapper">
                    <img className="icon1" src="https://img.icons8.com/material-sharp/24/000000/pencil--v2.png" onClick={() => this.reviewEdit()}/>
                    <img className="icon2" src="https://img.icons8.com/dotty/80/000000/delete-forever.png" onClick={() => deleteBook(book.id)}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Book;

