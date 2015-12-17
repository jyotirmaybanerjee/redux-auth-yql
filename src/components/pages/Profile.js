import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Profile extends Component {
  render () {
    const logoutLink = (<Link to="/logout">logout</Link>);

    return (
      <div>
        <div className="text-center">
          <h3>User Profile</h3>
          <p>
            This is a secured area. You may update your profile(!) or { logoutLink }.
          </p>
        </div>
      </div>
    )
  }
}
