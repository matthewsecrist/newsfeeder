import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap'

import {
  ArticleBody,
  ArticleImageBlock,
  ArticleImage
} from './article/ArticleComponents'

const Article = props => {
  const { title, source, description, url, image, publishedAt } = props
  return (
    <ArticleBody>
      <Card>
        <Container>
          <Row>
            <ArticleImageBlock xs='4'>
              {image ? <ArticleImage src={image} /> : null}
            </ArticleImageBlock>
            <Col xs='8'>
              <CardBody>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <CardTitle className='title'>{title}</CardTitle>
                </a>
                <CardSubtitle className='subtitle'>
                  {source} posted {moment(publishedAt).fromNow()}
                </CardSubtitle>
                <CardText>{description}</CardText>
              </CardBody>
            </Col>
          </Row>
        </Container>
      </Card>
    </ArticleBody>
  )
}

Article.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  publishedAt: PropTypes.string
}

export default Article
