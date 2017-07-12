import React, {Component} from 'react'
import {Link} from 'react-router'
import './HomePage.style.css'
import { Button, Card, Row, Col, Icon } from 'react-materialize'
import {Image} from '../../assets/'
import {Header, Footer} from '../../components/'

class HomePage extends Component {
  render() {
    //console.log(this.props)
    return (
      <div class="App">
        <Header/>
        <div id="body">
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 center">
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <h4>Home Page</h4>
                  <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                  <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col m4">
              <div class="center promo promo-example">
                <i class="large material-icons">flash_on</i>
                <p class="promo-caption">Speeds up development</p>
                <p class="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
              </div>
            </div>
            <div class="col m4">
              <div class="center promo promo-example">
                <i class="large material-icons">group</i>
                <p class="promo-caption">User Experience Focused</p>
                <p class="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
              </div>
            </div>
            <div class="col m4">
              <div class="center promo promo-example">
                <i class="large material-icons">settings</i>
                <p class="promo-caption">Easy to work with</p>
                <p class="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
              </div>
            </div>
          </div>
          {/*<Link to="/">Root page</Link>*/}
        </div>
          <Footer/>
      </div>
    )
  }
}
export default HomePage
