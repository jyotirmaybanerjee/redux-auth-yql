import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render () {

    return (
      <div>
        <div className="text-center">
          <h3>About</h3>
          <p>
            A simple application using <strong> react, redux, react-router, ES-2015 and Localstorage</strong>. 
          </p>
          <p>
            You need to login to see the nasdaq page and the user profile page. 
          </p>
        </div>
      </div>
    )
  }
}
