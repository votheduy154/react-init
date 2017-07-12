import React, {Component} from 'react';
import './Header.style.css';
import {Dropdown, Button, Col, Row, Container, Navbar, NavItem} from 'react-materialize';
import {MainMenu} from '../../components'

class Header extends Component {
  render() {
    return (
      <div id="Header">
        <h1 class="logo">MASTERCLASS VIET NAM</h1>
        <ul class="menu-language">
          <li><a href="">Vietnamese</a></li>
          <li><a href="">Sign up / Log in</a></li>
        </ul>
        <MainMenu/>
      </div>
    );
  }
}

export default Header;
