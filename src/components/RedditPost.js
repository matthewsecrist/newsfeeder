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

import { ArticleBody, ArticleImageBlock } from './article/ArticleComponents'
import { Title, Small } from './article/RedditComponents'

const RedditPost = props => {
  const { title, redditLink, comments, url, thumbnail } = props
  return (
    <ArticleBody minHeight='150px'>
      <Card>
        <Container>
          <Row>
            <Col xs='8'>
              <CardBody>
                <CardTitle>
                  <a href={url}>
                    <Title>{title}</Title>
                  </a>
                </CardTitle>
                <CardText>
                  <a
                    href={`http://www.reddit.com/${redditLink}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Small>{comments} comments</Small>
                  </a>
                </CardText>
              </CardBody>
            </Col>
            <ArticleImageBlock sm='12' md='4' src={thumbnail} height='150px' />
          </Row>
        </Container>
      </Card>
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
