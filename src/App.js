import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { SemipolarSpinner } from 'react-epic-spinners'

import CenterDiv from './components/CenterDiv'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Attribution from './components/Attribution'

import ArticleViewer from './containers/ArticleViewer'
import RedditViewer from './containers/RedditViewer'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articlesLoading: true,
      redditLoading: true
    }
  }

  articlesDoneLoading = async () => {
    this.setState({ articlesLoading: false })
  }

  redditDoneLoading = async () => {
    this.setState({ redditLoading: false })
  }

  render () {
    let loading = this.state.articlesLoading && this.state.redditLoading
    return (
      <div>
        <NavBar />

        <Hero fluid>
          <Container fluid>
            <h1 className='display-3'>News Feeder</h1>
            <p className='lead'>A Political News Aggregator.</p>
          </Container>
        </Hero>
        <CenterDiv hidden={!loading} height='50vh'>
          <SemipolarSpinner color='blue' />
        </CenterDiv>
        <Container hidden={loading}>
          <Row>
            <Col sm='12' md='6' lg='8'>
              <ArticleViewer onDoneLoading={this.articlesDoneLoading} />
            </Col>
            <Col sm='12' md='6' lg='4'>
              <RedditViewer onDoneLoading={this.redditDoneLoading} />
            </Col>
          </Row>
          <Row>
            <Attribution>
              Created by{' '}
              <a href='http://www.matthewsecrist.net'>Matthew Secrist</a>,
              Powered by <a href='https://newsapi.org/'>NewsAPI</a> and
              <a href='http://www.reddit.com/r/politics'> r/politics</a>
            </Attribution>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
