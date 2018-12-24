import * as React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import RedditPost from '../components/RedditPost'

class RedditViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const redditUrl =
      'https://www.reddit.com/r/politics/top.json?sort=top&t=day&limit=10'

    const headers = {
      'X-User-Agent': 'web:newsfeeder.surge.sh:v1 (by /u/matthewsecrist)'
    }

    axios
      .get(redditUrl, headers)
      .then(r => {
        this.setState({ posts: r.data.data.children })
        this.props.onDoneLoading()
      })
      .catch(e => console.log(e))
  }

  render () {
    return (
      <div>
        <h1>From /r/Politics</h1>
        {this.state.posts.map((post, index) => (
          <RedditPost
            key={index}
            title={post.data.title}
            redditLink={post.data.permalink}
            comments={post.data.num_comments}
            url={post.data.url}
            thumbnail={post.data.thumbnail}
          />
        ))}
      </div>
    )
  }
}

RedditViewer.propTypes = {
  onDoneLoading: PropTypes.func
}

export default RedditViewer
