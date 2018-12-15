import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap'

import './redditPost.css'

const RedditPost = props => {
  const { title, redditLink, comments, url, thumbnail } = props
  return (
    <div className='reddit-post'>
      <Card>
        <Container>
          <Row>
            <Col xs='8'>
              <CardBody>
                <CardTitle>
                  <a href={url}>
                    <h5>{title}</h5>
                  </a>
                </CardTitle>
                <CardText>
                  <a href={redditLink} target='_blank'>
                    <small>{comments} comments</small>
                  </a>
                </CardText>
              </CardBody>
            </Col>
            <Col xs='4' className='reddit-post-image-block'>
              <img
                src={thumbnail}
                alt='news image'
                className='reddit-post-thumbnail'
              />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
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
