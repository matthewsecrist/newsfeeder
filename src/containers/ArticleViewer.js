import React, { Component } from 'react'
import NewsApi from 'newsapi'

import Article from '../components/Article'

const NewsApiKey = process.env.REACT_APP_NEWS_API_KEY

const newsapi = new NewsApi(NewsApiKey)

class ArticleViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
      loading: true
    }
  }

  componentDidMount () {
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

    newsapi.v2
      .everything({
        q: 'politics',
        sources:
          'associated-press,cnn,politico,the-new-york-times,the-washington-post,wired',
        language: 'en',
        sortBy: 'top',
        from: `${yy}-${mm}-${dd}`,
        to: `${yy}-${mm}-${dd}`
      })
      .then(news => {
        console.log(news)
        this.setState({ articles: news.articles })
        this.setState({ loading: false })
      })
  }

  returnArticles () {
    return (
      <div className='App'>
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
      </div>
    )
  }

  isLoading () {
    return <h1>Loading...</h1>
  }

  render () {
    return (
      <div>{this.state.loading ? this.isLoading() : this.returnArticles()}</div>
    )
  }
}

export default ArticleViewer
