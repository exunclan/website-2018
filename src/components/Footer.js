import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: rgb(245, 248, 255);
`

const Footer = () => (
  <Wrapper>
    <Container
      style={{
        textAlign: 'center',
      }}
    >
      <a href="//facebook.com">Facebook</a>
      &nbsp;&middot;&nbsp;
      <a href="//lnexun.com">ln(exun)</a>
    </Container>
  </Wrapper>
)

export default Footer
