import React, {Component} from 'react'
import {Link} from 'react-router'
import './HomePage.style.css'
import {Image} from '../../assets/'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Image.logoApp} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a Home page
        </p>
        <Link to="/">Root page</Link>
      </div>
    )
  }
}

export default HomePage
