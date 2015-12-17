import 'whatwg-fetch';
import parseLinkHeader from 'parse-link-header';
import handleActionError from '../utils/handle-action-error';
import processResponse from '../utils/process-response';
import moment from 'moment';

import {
  FETCH_STOCK
} from '../constants'

const YQL_API = 'http://query.yahooapis.com/v1/public/yql'

export function fetchStock (options) {

  let startDate = moment( moment().subtract(30, 'days') ).format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");
  let query = encodeURIComponent(`select * from yahoo.finance.historicaldata where symbol in ("GOOG","AAPL","FB","AMZN") and startDate = "${startDate}" and endDate = "${endDate}"`);
  let url = `${YQL_API}?q=${query}&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json` ;

  return dispatch => {
    fetch(url)
    .then(processResponse)
    .then(res => dispatch({
      type: FETCH_STOCK,
      stocks: res.query.results.quote
    }))
    .catch(error => handleActionError(dispatch, error, FETCH_STOCK))
  }
}
