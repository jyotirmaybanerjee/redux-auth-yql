import React, { PropTypes, Component } from 'react';
import * as actions from '../../actions/application';

export default class Login extends Component {

  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { email: null, password: null }
  }

  handleInputChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { history, store } = this.context
    const { location } = this.props

    let nextPath = '/profile'
    if (location.state && location.state.nextPathname)
      nextPath = location.state.nextPathname

    store.dispatch(actions.login(this.state, () => {
      // redirect to a secure page
      history.pushState({}, nextPath)
    }))
  }

  render () {
    return (

      <div className="container">

        <div className="panel panel-default login-panel">
          <div className="panel-heading">
            <h3 className="panel-title">Login</h3>
          </div>
          <div className="panel-body">
            <form
              onSubmit={::this.handleSubmit}
              onChange={::this.handleInputChange}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" defaultValue="anythin@is.fine" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" defaultValue="secret" />
              </div>
              <button type="submit" className="btn btn-primary pull-right">Login</button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
