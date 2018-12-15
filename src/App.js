import React, { Component } from 'react'

import './App.css'

import ArticleViewer from './containers/ArticleViewer'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

class App extends Component {
  render () {
    return (
      <div>
        <Jumbotron fluid className='header'>
          <Container fluid>
            <h1 className='display-3'>News Feeder</h1>
            <p className='lead'>A Political News Curator.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs='8'>
              <ArticleViewer />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
