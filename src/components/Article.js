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
            <ArticleImageBlock sm='12' md='4'>
              {image ? <ArticleImage src={image} /> : null}
            </ArticleImageBlock>
            <Col sm='12' md='8'>
              <CardBody>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <CardTitle>{title}</CardTitle>
                </a>
                <CardSubtitle>
                  <p className='text-muted'>
                    {source} posted {moment(publishedAt).fromNow()}
                  </p>
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
