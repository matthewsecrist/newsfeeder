import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsApi from 'newsapi'

import { Button, Row, Col } from 'reactstrap'

import Article from '../components/Article'

import { Icon } from 'react-icons-kit'
import { chevronLeft } from 'react-icons-kit/oct/chevronLeft'
import { chevronRight } from 'react-icons-kit/oct/chevronRight'

const NewsApiKey = process.env.REACT_APP_NEWS_API_KEY

const newsapi = new NewsApi(NewsApiKey)

class ArticleViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      results: 0,
      page: 1
    }
  }

  async componentDidMount () {
    try {
      const res = await this.getNewsArticles(1)
      this.updateNewsState({
        articles: res.articles,
        results: res.totalResults
      })
      this.props.onDoneLoading()
    } catch (e) {
      console.log(e)
    }
  }

  nextPage = async () => {
    if (this.canLoadMore()) {
      const nextPage = this.state.page + 1

      try {
        const res = await this.getNewsArticles(nextPage)
        this.updateNewsState({
          articles: res.articles,
          results: res.totalResults
        })
        this.setState({ page: nextPage })
      } catch (e) {
        console.log(e)
      }
    }
  }

  prevPage = async () => {
    if (this.state.page > 1) {
      const prevPage = this.state.page - 1
      try {
        const res = await this.getNewsArticles(prevPage)
        this.updateNewsState({
          articles: res.articles,
          results: res.totalResults
        })
        this.setState({ page: prevPage })
      } catch (e) {
        console.log(e)
      }
    }
  }

  canLoadMore () {
    return this.state.results > this.state.page * 10
  }

  updateNewsState ({ articles, results }) {
    console.log(results)
    this.setState({
      articles,
      results,
      loading: false
    })
  }

  getNewsArticles (page) {
    let today = this.getTodaysDate()

    return newsapi.v2.everything({
      q: 'politics',
      sources:
        'associated-press,cnn,politico,the-new-york-times,the-washington-post,wired,cbs-news,msnbc,nbc-news,the-hill,usa-today',
      language: 'en',
      sortBy: 'top',
      from: today,
      to: today,
      page: page,
      pageSize: 10
    })
  }

  getTodaysDate () {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yy = today.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    return `${yy}-${mm}-${dd}`
  }

  renderArticles () {
    return (
      <div>
        <Row className='clearfix'>
          <Col className='float-right'>
            <Button
              outline
              color='primary'
              className='float-right'
              onClick={this.prevPage}
              disabled={this.state.page <= 1}
            >
              <Icon icon={chevronLeft} /> Previous Page
            </Button>
          </Col>
          <Col>
            <Button
              outline
              color='primary'
              className='float-left'
              onClick={this.nextPage}
              disabled={!(this.state.results > this.state.page * 10)}
            >
              Next Page <Icon icon={chevronRight} />
            </Button>
          </Col>
        </Row>
        <Row>
          {this.state.articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              source={article.source.name}
              description={article.description}
              url={article.url}
              image={article.urlToImage}
              publishedAt={article.publishedAt}
            />
          ))}
        </Row>
      </div>
    )
  }

  render () {
    return <div>{this.state.loading ? null : this.renderArticles()}</div>
  }
}

ArticleViewer.propTypes = {
  onDoneLoading: PropTypes.func
}

export default ArticleViewer
