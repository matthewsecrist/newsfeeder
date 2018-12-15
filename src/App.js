import React, { Component } from 'react'

import './App.css'

import ArticleViewer from './containers/ArticleViewer'
import RedditViewer from './containers/RedditViewer'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

class App extends Component {
  render () {
    return (
      <div>
        <Jumbotron fluid className='header'>
          <Container fluid>
            <h1 className='display-3'>News Feeder</h1>
            <p className='lead'>A Political News Aggregator.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs='8'>
              <ArticleViewer />
            </Col>
            <Col xs='4'>
              <RedditViewer />
            </Col>
          </Row>
          <Row>
            <small className='attribution'>
              Created by{' '}
              <a href='http://www.matthewsecrist.net'>Matthew Secrist</a>,
              Powered by <a href='https://newsapi.org/'>NewsAPI</a> and
              <a href='http://www.reddit.com/r/politics'> r/politics</a>
            </small>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
