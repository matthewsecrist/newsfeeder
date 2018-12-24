import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsApi from 'newsapi'
import moment from 'moment'
import { Button, Row, Col } from 'reactstrap'
import { Icon } from 'react-icons-kit'
import { chevronLeft } from 'react-icons-kit/oct/chevronLeft'
import { chevronRight } from 'react-icons-kit/oct/chevronRight'

import Article from '../components/Article'

const NewsApiKey = process.env.REACT_APP_NEWS_API_KEY

const newsapi = new NewsApi(NewsApiKey)

class ArticleViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
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
    this.setState({
      articles,
      results
    })
  }

  getNewsArticles (page) {
    let dates = this.getDates()
    return newsapi.v2.everything({
      q: 'politics',
      sources:
        'associated-press,cnn,politico,the-new-york-times,the-washington-post,wired,cbs-news,msnbc,nbc-news,the-hill,usa-today',
      language: 'en',
      sortBy: 'top',
      from: dates.yesterday,
      to: dates.today,
      page: page,
      pageSize: 10
    })
  }

  getDates () {
    return {
      today: moment().format('YYYY-MM-DD'),
      yesterday: moment()
        .subtract(1, 'days')
        .format('YYYY-MM-DD')
    }
  }

  render () {
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
}

ArticleViewer.propTypes = {
  onDoneLoading: PropTypes.func
}

export default ArticleViewer
