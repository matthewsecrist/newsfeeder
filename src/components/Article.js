import React from 'react'
import ReactTimeAgo from 'react-time-ago'
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

export default ({ title, source, description, url, image, publishedAt }) => (
  <div className='article'>
    <Card>
      <Container>
        <Row>
          <Col xs='4' className='article-image-block'>
            {image ? (
              <img src={image} alt='news image' className='article-image' />
            ) : null}
          </Col>
          <Col xs='8'>
            <CardBody>
              <a href={url} target='_blank'>
                <CardTitle className='title'>{title}</CardTitle>
              </a>
              <CardSubtitle className='subtitle'>
                {source} posted{' '}
                <ReactTimeAgo locale='en'>{new Date(publishedAt)}</ReactTimeAgo>
              </CardSubtitle>
              <CardText>{description}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </Card>
  </div>
)
