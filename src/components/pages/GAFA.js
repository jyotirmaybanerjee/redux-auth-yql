import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Stock from './Stock';
import { fetchOnUpdate } from '../../decorators';

@fetchOnUpdate([''], (params, actions) => {
  actions.fetchStock();
})
export default class GAFA extends Component {

  static propTypes = {
    actions: PropTypes.object,
    yahooFinance: PropTypes.object
  }

  render () {

    let loadingGif = <span />;
    const { yahooFinance: {stocks} } = this.props;
    let stockArray = [[],[],[],[]];
    if(Object.keys(stocks).length) {

      stocks.map(stock => {

        switch( stock.Symbol ) {
          case 'GOOG':
            stockArray[0].push(<Stock stock={stock} />);
            break;
          case 'AAPL':
            stockArray[1].push(<Stock stock={stock} />);
            break;
          case 'FB':
            stockArray[2].push(<Stock stock={stock} />);
            break;
          case 'AMZN':
            stockArray[3].push(<Stock stock={stock} />);
            break;
        }
      });
    } else {
      loadingGif = (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin fa-5x"></i>
        </div>
      );
    };

    let key = 1;
    return (
      <div>
        <div className="container">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul>
            {stockArray[0].map(i =>
              <li key={key++}>
                {i}
              </li>
            )}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul>
            {stockArray[1].map(i =>
              <li key={key++}>
                {i}
              </li>
            )}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul>
            {stockArray[2].map(i =>
              <li key={key++}>
                {i}
              </li>
            )}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul>
            {stockArray[3].map(i =>
              <li key={key++}>
                {i}
              </li>
            )}
            </ul>
          </div>
          {loadingGif}
        </div>
      </div>
    )
  }
}
