import styled from 'styled-components'
import { Col } from 'reactstrap'

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 300px;
  width: 100%;
`

export const ArticleImageBlock = styled(Col)`
  height: 250px;
  overflow: hidden;
  background: rgba(207, 4, 4, 1);
  align-self: center;
  align-items: center;
`

export const ArticleImage = styled.img`
  height: 100%;
`
