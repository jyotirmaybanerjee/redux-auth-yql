import React, { PropTypes, Component } from 'react';

export default class Stock extends Component {

  static propTypes = {
    stock: PropTypes.object.isRequired
  }

  render () {
    const { stock } = this.props
    let panelClass = 'panel panel-default';
    if( ( stock.Close - stock.Open ) > 0) {
      panelClass = 'panel panel-success';
    } else if( ( stock.Close - stock.Open ) < 0) {
      panelClass = 'panel panel-danger';
    }
    let panelTitle = (
      <h3 className="panel-title">
        <span>{stock.Date}</span>
        <span className="pull-right">{stock.Symbol}</span>
      </h3>
    );
    return (
      <div className={panelClass} style={{width: '250px',float: 'left'}}>
        <div className="panel-heading">
          {panelTitle}
        </div>
        <div className="panel-body">
          <div>
            <span>Open: </span>
            <span>{stock.Open}</span>
          </div>
          <div>
            <span>Close: </span>
            <span>{stock.Close}</span>
          </div>
          <div>
            <span>High: </span>
            <span>{stock.High}</span>
          </div>
          <div>
            <span>Low: </span>
            <span>{stock.Low}</span>
          </div>
          <div>
            <span>Volume: </span>
            <span>{stock.Volume}</span>
          </div>
          <div>
            <span>Adj_Close: </span>
            <span>{stock.Adj_Close}</span>
          </div>
        </div>
      </div>
    )
  }
}
