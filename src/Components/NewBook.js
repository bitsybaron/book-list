import React, {Component} from 'react';

class NewBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            review: '',
            bookImg: ''
        }
        this.universalHandler = this.universalHandler.bind(this)
    }
    
    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        const {title, author, review, bookImg} = this.state;
        return(
        <div className="new-book">
            <input placeholder="title" value={title} name="title" onChange={this.universalHandler} />
            <input placeholder="author" value={author} name="author" onChange={this.universalHandler}/>
            <input placeholder="review" value={review} name="review" onChange={this.universalHandler}/>
            <input placeholder="book image url" value={bookImg} name="bookImg" onChange={this.universalHandler}/>
            <button className="add-btn" onClick={(e) => {this.props.addBook(e, title, author, review, bookImg); this.setState({title: '',
            author: '',
            review: '',
            bookImg: ''})}} > Add</button>
        </div>
        )
    }
}

export default NewBook;