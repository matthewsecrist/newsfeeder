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

import './article.css'

const Article = props => {
  const { title, source, description, url, image, publishedAt } = props
  return (
    <div className='article'>
      <Card>
        <Container>
          <Row>
            <Col xs='4' className='article-image-block'>
              {image ? (
                <img src={image} alt='' className='article-image' />
              ) : null}
            </Col>
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
    </div>
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
