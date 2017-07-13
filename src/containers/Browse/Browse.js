import React, {Component} from 'react'
import './Browse.style.css'
import {Header, Footer} from '../../components/'
import {Container, Section, Row, Col} from 'react-materialize'

class Browse extends Component {
  render() {
    return (
      <div className="browse-page">
        <Header/>
        <div id="body">
          <Container>
            <Section>
              <Row>
                <Col className="center" s={12}>
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <h4>Browse Page</h4>
                  <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna
                    fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus.
                    Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget
                    dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                  <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna
                    fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus.
                    Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget
                    dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </Col>
              </Row>
            </Section>
          </Container>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Browse
