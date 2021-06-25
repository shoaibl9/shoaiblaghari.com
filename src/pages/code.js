import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Carousel } from 'react-bootstrap'

import andrew from '../images/andrew.jpg'
import blackjack from '../images/blackjack.jpg'
import tictactoe from '../images/tictactoe.jpg'
import flippedtravel from '../images/flippedtravel.jpg'

const StyledCarousel = styled(Carousel)`
  width: 80%;
  margin: auto;
  margin-top: 2vh;
`

const CodePage = () => {
  return (
    < >
      <Layout pageTitle="Code">
        <StyledCarousel>

          <Carousel.Item>
            <img
              className="d-block w-75 m-auto"
              src={andrew}
              alt="Andrew App"
            />
            <p className="text-center text-white mt-3">Andrew is my work supervisor. He asked me to manually send 300 emails for scholarship outreach (it ended up being closer to 500 emails). I made this app instead.</p>
            <p className="text-center text-white mb-5">Now, will I clock in the amount of time it takes me do outreach, or the amount of time it would have taken me without this app, then chill for the rest of the week? That's one secret I'll never tell. Xoxo, Gossip girl</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-75 m-auto"
              src={blackjack}
              alt="Blackjack App"
            />
            <p className="text-center text-white mt-3 mb-5">There's only so many things you can do on a 2-hour flight. Luckily, programming Blackjack in Java is one of them.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-75 m-auto"
              src={tictactoe}
              alt="Tic-tac-toe App"
            />
            <p className="text-center text-white mt-3 mb-5">Followed an online tutorial to make a game of Tic-Tac-Toe with React JS. Using state and stuff.</p>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-75 m-auto"
              src={flippedtravel}
              alt="Flipped Travel App"
            />
            <p className="text-center text-white mt-3">I didn't code any of this! Just putting that out there, I. Did. Not. Code. Any. Of. This. </p>
            <p className="text-center text-white mb-5">This was a project we (Hao, Chi, Gary, Ryan) submitted for the Dubhacks Hackathon back in October 2020. I wanted to include it
             because it was still a great learning experience for me, my first hackathon, and a great introduction to what I learned you can do with a couple friends and some lines of code. Vivid memory of Hao lecturing me on APIs.</p>
          </Carousel.Item>

        </StyledCarousel>

        <div style={{ borderTop: "3px solid #fff ", marginLeft: 50, marginRight: 50 }}></div>

        <p className="text-white ml-5 mt-3">I know, I know. I haven't made that much stuff yet. I'm trying okay!</p>
        <p className="text-white ml-5">Some more of my code (that I'm not sure if I can share because it was for a class at UW) can be found
          <strong>
          <a className="text-white" target="_blank" rel="noreferrer" href="https://courses.cs.washington.edu/courses/cse143x/20au/homework.shtml"> here.</a>
          </strong></p>
        <p className="text-white ml-5">I am working on some pretty cool stuff though ;)</p>
        <em><a className="text-white ml-5" href="https://github.com/shoaibl9" target="_blank" rel="noreferrer">https://github.com/shoaibl9</a></em>
      </Layout>
    </>
  )
}

export default CodePage;
