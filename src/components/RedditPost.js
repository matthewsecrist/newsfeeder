import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import { ArticleBody, ArticleImageBlock } from './article/ArticleComponents'
import { Title, Small } from './article/RedditComponents'

const RedditPost = props => {
  const { title, redditLink, comments, url, thumbnail } = props
  return (
    <ArticleBody minHeight='150px'>
      <Container>
        <Row>
          <Col xs='8'>
            <a href={url}>
              <Title>{title}</Title>
            </a>

            <a
              href={`http://www.reddit.com/${redditLink}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Small>{comments} comments</Small>
            </a>
          </Col>
          <ArticleImageBlock xs='4' src={thumbnail} height='100px' />
        </Row>
      </Container>
    </ArticleBody>
  )
}

RedditPost.propTypes = {
  title: PropTypes.string,
  redditLink: PropTypes.string,
  comments: PropTypes.number,
  url: PropTypes.string,
  thumbnail: PropTypes.string
}

export default RedditPost
