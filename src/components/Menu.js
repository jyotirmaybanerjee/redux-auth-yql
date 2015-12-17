import React, { PropTypes, Component } from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as applicationActions from '../actions/application';

@connect(({ application }) => ({ application }), applicationActions)
export default class Menu extends Component {

  static propTypes = {
    application: PropTypes.object.isRequired
  }

  constructor (props, context) {
    super(props, context)
  }

  render () {

    return (
      <div id="menu" ref="menu">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#main-menu"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">PAI</a>
            </div>
            <div className="collapse navbar-collapse" id="main-menu">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/finance">NASDAQ</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/profile">
                    <i className="fa fa-user fa-2x"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
