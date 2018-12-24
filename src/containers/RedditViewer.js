import * as React from 'react'
import axios from 'axios'
import RedditPost from '../components/RedditPost'

class RedditViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      loading: true
    }
  }

  async componentDidMount () {
    const redditUrl =
      'https://www.reddit.com/r/politics/top.json?sort=top&t=day'

    const headers = {
      'X-User-Agent': 'web:newsfeeder.surge.sh:v1 (by /u/matthewsecrist)'
    }

    axios
      .get(redditUrl, headers)
      .then(r => {
        this.setState({ posts: r.data.data.children })
        this.setState({ loading: false })
        this.props.onDoneLoading()
      })
      .catch(e => console.log(e))
  }

  renderPosts () {
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

  render () {
    return <div>{this.state.loading ? null : this.renderPosts()}</div>
  }
}

export default RedditViewer
