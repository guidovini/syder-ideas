import React from 'react'

const Profile = () => {
  return (
    <div className="section">
      <div className="columns is-centered">
        <div className="column is-three-fifths">
            <h1 className="title is-4">Profile</h1>

            <div className="section">
              <figure className="image is-128x128">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            
            <div className="columns">
              <h2 className="subtitle is-5 column">Name: </h2>
              <p className="column is-narrow">THIS IS THE NAME</p>
            </div>

            <div className="columns">
              <h2 className="subtitle is-5 column">Last Name: </h2>
              <p className="column is-narrow">THIS IS THE LAST NAME</p>
            </div>

            <div className="columns">
              <h2 className="subtitle is-5 column">E-mail: </h2>
              <p className="column is-narrow">THIS IS THE EMAIL</p>
            </div>

            <div className="columns">
              <h2 className="subtitle is-5 column">Number of Ideas: </h2>
              <p className="column is-narrow">THIS IS THE NUMBER OF IDEAS</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Profile