import React, { Component } from 'react';
import './Sidebar.style.css';

class Siderbar extends Component {
  render() {
    return (
      <div id="Sidebar">
        <ul>
          <li><a href="">Overview</a></li>
          <li><a href="">Syllabus</a></li>
          <li><a href="">Assignment</a></li>
          <li><a href="">Pratice</a></li>
          <li><a href="">Tuner</a></li>
          <li><a href="">Q&A</a></li>
        </ul>
      </div>
    );
  }
}

export default Siderbar;
