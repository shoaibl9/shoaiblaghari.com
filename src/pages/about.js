import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import resume from '../assets/files/Resume.pdf'

import Layout from '../components/Layout'
import AboutCard from '../components/AboutCard'
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    < >
      <Layout pageTitle="About">
        <AboutCard />
        <Accordion>
          <Row className="justify-content-center">
            <Col xs="10">
            <Card className="mt-5">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="0">
                  Click here to view my resume (as of September 2022)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <embed src={resume} type="application/pdf" width="100%" height="600px" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Col>
          </Row>
        </Accordion>

        <p className="text-center mt-3 mb-5">
        <a className="text-white" href={resume} target="_blank" rel="noreferrer">
        Or download it here (if it's not working)
        </a>
        </p>

      </Layout>
    </>
  )
}

export default AboutPage;
