import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GAFA from './GAFA';
import * as yqlActions from '../../actions/yahoofinance';


@connect(state => ({
  yahooFinance: state.yahooFinance
}), dispatch => ({
  actions: bindActionCreators(yqlActions, dispatch)
}))
export default class YahooFinance extends Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object
  }


  render () {
    return (
      <div>
        <div className="header">
          <h3 className="text-center"> Last 30 days stock details for Apple, Google, Facebook and Amazon</h3>
          <GAFA {...this.props} />
        </div>
        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { ...this.props })}
      </div>
    )
  }
}
