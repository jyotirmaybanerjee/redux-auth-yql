import React, { PropTypes, Component } from 'react';
import Menu from './Menu';
import DisplayError from './DisplayError';

export default class Application extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div id="layout">
        <Menu/>
        <div id="main">
          <DisplayError />
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
