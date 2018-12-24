import styled from 'styled-components'
import { Jumbotron } from 'reactstrap'

import img from '../images/headerimg.jpg'

export default styled(Jumbotron)`
  background: linear-gradient(
        141deg,
        rgba(207, 4, 4, 0.2) 0%,
        rgba(255, 48, 25, 0.5) 30%,
        rgba(207, 4, 4, 0.8)
      )
      50%,
    url(${img});
  color: white;
`
