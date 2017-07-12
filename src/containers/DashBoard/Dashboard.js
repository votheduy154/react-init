import React, {Component} from 'react'
import {Link} from 'react-router'
import './Dashboard.style.css'
import { Button, Card, Row, Col, Icon } from 'react-materialize'
import {Image} from '../../assets/'
import {Header, Footer, Sidebar} from '../../components/'

class Dashboard extends Component {
  render() {
    return (
      <div class="App">
        <Header/>
        <div id="body">
          <Row style={{marginBottom:0}}>
            <Col class="sidebar-column" s={12} m={3}>
              <Sidebar/>
            </Col>
            <Col class="dashboard-content" s={12} m={9}>
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
            </Col>
          </Row>
        </div>
          <Footer/>
      </div>
    )
  }
}

export default Dashboard
