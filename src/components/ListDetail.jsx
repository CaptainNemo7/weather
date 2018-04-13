import React, { Component } from 'react';

const ListDetail = ({selectedBook}) => {

    if (!selectedBook) {
      return <div>Select a title to get started</div>
    };   

    return (
      <div>
        <h3>List Item Detail</h3> 
        <div>Title: {selectedBook.title}</div>
        <div>Pages: {selectedBook.pages}</div>
      </div>
    )
}


export default ListDetail;