import styled from 'styled-components'
import { Col } from 'reactstrap'

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: ${props => props.minHeight};
  width: 100%;
`

export const ArticleImageBlock = styled(Col)`
  height: ${props => props.height};
  overflow: hidden;
  background: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`
