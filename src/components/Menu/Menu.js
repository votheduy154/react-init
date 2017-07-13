import React, {Component} from 'react';
import './Menu.style.css';
import {Link} from 'react-router'

class MainMenu extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  render() {
    console.log(this.context)
    return (
      <div className="container">
        <ul id="Menu">
          <li className={this.context.router.location.pathname === '/Home' ? 'active' : null}><Link to="/Home">HOME</Link></li>
          <li>|</li>
          <li className={this.context.router.location.pathname === '/Browse' ? 'active' : null}><Link to="/Browse">BROWSE</Link></li>
          <li>|</li>
          <li className={this.context.router.location.pathname === '/Dashboard' ? 'active' : null}><Link to="/Dashboard">MY DASHBOARD</Link></li>
          <li>|</li>
          <li className={this.context.router.location.pathname === '/Profile' ? 'active' : null}><Link to="/Profile">PROFILE</Link></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
