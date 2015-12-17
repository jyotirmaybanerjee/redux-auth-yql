import React, { PropTypes, Component } from 'react';

export default class Stock extends Component {

  static propTypes = {
    stock: PropTypes.object.isRequired
  }

  render () {
    const { stock } = this.props
    let panelClass = 'panel panel-default';
    let change = stock.Close - stock.Open;
    let percentChanged = (change / new Number(stock.Open) * 100 ).toFixed(1);
    if( change > 0) {
      panelClass = 'panel panel-success';
    } else if( change < 0) {
      panelClass = 'panel panel-danger';
    }
    let panelTitle = (
      <h3 className="panel-title">
        <span>{stock.Symbol}</span>
        <span className="pull-right">({percentChanged}%)</span>
      </h3>
    );
    return (
      <div className={panelClass} style={{width: '250px',float: 'left'}}>
        <div className="panel-heading">
          {panelTitle}
        </div>
        <div className="panel-body">
          <div>
            <span><strong>Date: </strong></span>
            <span>{stock.Date}</span>
          </div>
          <div>
            <span><strong>Open: </strong></span>
            <span>{new Number(stock.Open).toFixed(3)}</span>
          </div>
          <div>
            <span><strong>Close: </strong></span>
            <span>{new Number(stock.Close).toFixed(3)}</span>
          </div>
          <div>
            <span><strong>High: </strong></span>
            <span>{new Number(stock.High).toFixed(3)}</span>
          </div>
          <div>
            <span><strong>Low: </strong></span>
            <span>{new Number(stock.Low).toFixed(3)}</span>
          </div>
          <div>
            <span><strong>Volume: </strong></span>
            <span>{stock.Volume}</span>
          </div>
          <div>
            <span><strong>Adj_Close: </strong></span>
            <span>{stock.Adj_Close}</span>
          </div>
        </div>
      </div>
    )
  }
}
