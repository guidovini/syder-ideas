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
      this.props.history.push('/dashboard')
      console.log('Signup was succesful')
    }))
  }

  render() {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-one-third">

            <h1 className="title">Sign Up</h1>
            
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    type="email" 
                    value={this.state.email}
                    placeholder="Email" 
                    onChange={this.handleChangeEmail} 
                    className="input is-medium" />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input 
                    type="password" 
                    value={this.state.password} 
                    placeholder="Password"
                    onChange={this.handleChangePassword} 
                    className="input is-medium" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input 
                    type="submit" 
                    className="button is-link is-medium" 
                    value="Signup"/>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Signup)