import React, {Component} from 'react';
import './Footer.style.css';
import * as Icon from 'react-icons/lib/fa/';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <ul class="list-social">
          <li>
            <a href=""><Icon.FaFacebook size={17} color="#fff"/></a>
          </li>
          <li>
            <a href=""><Icon.FaTwitter size={17} color="#fff"/></a>
          </li>
          <li>
            <a href=""><Icon.FaPinterestP size={17} color="#fff"/></a>
          </li>
          <li>
            <a href=""><Icon.FaGooglePlus size={17} color="#fff"/></a>
          </li>
        </ul>
        <ul class="menu-footer">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">|</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">|</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </footer>

    );
  }
}

export default Footer;
