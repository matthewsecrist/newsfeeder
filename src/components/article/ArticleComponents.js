import styled from 'styled-components'
import { Col } from 'reactstrap'

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 300px;
`

export const ArticleImageBlock = styled(Col)`
  width: 40%;
  height: 250px;
  overflow: hidden;
  background: #333333;
`

export const ArticleImage = styled.img`
  height: 100%;
`
