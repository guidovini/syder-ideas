import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from 'actions/auth'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = (e) => {
    const email = e.target.value
    this.setState({ email })
  }

  handleChangePassword = (e) => {
    const password = e.target.value
    this.setState({ password })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(login(this.state, () => {
      this.props.history.push('/dashboard')
      console.log('Login was succesful')
    }))
  }

  render() {
    return (
      <div className="section">
        <form onSubmit={this.handleSubmit} className="container">
          <fieldset className="field">
            <label className="label">Email</label>
            <input type="email" value={this.state.email} onChange={this.handleChangeEmail} className="input" />
          </fieldset>

          <fieldset className="field">
            <label className="label">Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="input" />
          </fieldset>

          <fieldset className="field">
            <input type="submit" className="button is-link" value="Login"/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect()(Login)