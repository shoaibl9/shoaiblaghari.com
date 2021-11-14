// currently unused

import React from 'react'
import styled from 'styled-components'

import { Container } from 'react-bootstrap'

const QuoteText = styled(Container)`
&{
  color: white;
  text-align: center;
}
`

function Quote() {
  return(
    <Container>
      <QuoteText className="mt-2">
        This the part of my life my life movie gon' be about.
      </QuoteText>
      <QuoteText>
        <em>~Chance the Rapper</em>
      </QuoteText>
    </Container>
  );
}

export default Quote;
