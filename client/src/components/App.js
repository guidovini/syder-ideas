import React from 'react';
import Header from './Header/Header';

// componentDidMount() {
//   this.callApi()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

// callApi = async () => {
//   const response = await fetch('https://syder-ideas-server.herokuapp.com/api/ideas')
//   const body = await response.json()

//   if (response.status !== 200) throw Error(body.message)

//   return body.ideas
// }

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
