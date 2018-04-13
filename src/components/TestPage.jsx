import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListDetail from './ListDetail';

class TestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {title: 'The Count of Monte Cristo', pages:101},
        {title: 'Frankenstein', pages: 20},
        {title: 'Artemis', pages: 305},
        {title: 'Lord Of the Rings', pages:3455},
        {title: 'The Martian', pages: 2000},
        {title: 'The Sky Stone', pages: 305},
      ],
      selectedBook: null
    }
    this.renderList = this.renderList.bind(this);
    this.selectExampleBook = this.selectExampleBook.bind(this);
  }


  selectExampleBook(item) {
    this.setState({
      selectedBook: {title: item.title, pages: item.pages}
    })
  }

  renderList() {
    return this.state.list.map((item) => {
      return (
        <li 
        key={item.title} 
        onClick={() => this.selectExampleBook(item)}
        >{item.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Here is your test page!</h1>
        <Link to="/">Back to Home Page</Link>
        <h2>Here is a list of books</h2>
        <ul>
          {this.renderList()}
        </ul>
        <ListDetail selectedBook={this.state.selectedBook} />
      </div>
    )
  }
}


export default TestPage;



