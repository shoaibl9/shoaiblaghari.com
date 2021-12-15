// take advantage of functional programming:

// const NewsFeature = ({ header, link, description  }) => (
//   <>
//     <Col xs="12" sm="4" className="mt-2">
//         <Card>
//           <p className="ml-2 mt-2 mr-2 mb-2">
//           <a href="${link}"
//           target='_blank' rel="noopener noreferrer">
//           <em>${header}, </em></a>
//             "${description}."
//           </p>
//         </Card>
//       </Col>
//    </>
// )

import React from 'react'

import { Container, Col, Row, Card } from 'react-bootstrap'

function NewsCard() {
  return(
    <Container>
      <Row className="mt-2">
        <Col>
          <Card>
            <strong className="text-center">Featured News</strong>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs="12" sm="4" className="mt-2">
          <Card>
            <p className="ml-2 mt-2 mr-2 mb-2">
            <a href="https://www.youtube.com/watch?v=W1QT8dpX9Gk"
            target='_blank' rel="noopener noreferrer">
            <em>Harry Bridges Center for Labor Studies, </em></a>
             "Shoaib Laghari Full Interview (2021-2022 Scholarship Recipient)."
            </p>
          </Card>
        </Col>
        <Col xs="12" sm="4" className="mt-2">
          <Card>
            <p className="ml-2 mt-2 mr-2 mb-2">
            <a href="https://www.seattletimes.com/life/how-a-turbulent-2020-that-included-a-pandemic-and-black-lives-matter-protests-changed-the-life-goals-of-young-people/"
            target='_blank' rel="noopener noreferrer">
            <em>Seattle Times, </em></a>
             "Between a pandemic and Black Lives Matter protests, 2020 changed the life trajectories of many college students."
            </p>
          </Card>
        </Col>
        <Col xs="12" sm="4" className="mt-2">
          <Card>
            <p className="ml-2 mt-2 mr-2 mb-2">
            <a href="https://www.washington.edu/ima/2020/12/07/fall-2020-intramurals-results/"
            target='_blank' rel="noopener noreferrer">
            <em>University of Washington, </em></a>
             "Fall 2020 Intramurals results."
             </p>
          </Card>
        </Col>
        <Col xs="12" sm="4" className="mt-2">
          <Card>
            <p className="ml-2 mt-2 mr-2 mb-2">
              <a href="https://www.seattletimes.com/seattle-news/seattle-area-young-people-reflect-on-what-it-means-to-only-know-a-post-9-11-world/"
              target='_blank' rel="noopener noreferrer">
              <em>Seattle Times, </em></a>
               "Seattle area young people reflect on what it means to only know a post-9/11 world."</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsCard;
