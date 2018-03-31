import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const NotFoundPage = (props) => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  )
}


export default NotFoundPage;