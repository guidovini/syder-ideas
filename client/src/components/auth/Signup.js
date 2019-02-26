import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from 'actions/auth'

class Signup extends Component {
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
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.dispatch(signup(user, () => {
      this.props.history.push(`/dashboard`)
      console.log('Signup was succesful')
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
            <input type="submit" className="button is-link" value="Signup"/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect()(Signup)