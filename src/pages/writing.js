import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Card, Accordion } from 'react-bootstrap'

import trevecca from '../stuff/2015/trevecca.pdf'
import freshmanseminar from '../stuff/2017/freshmanseminar.pdf'
import karachi from '../stuff/2018/karachi.pdf'
import magic from '../stuff/2018/magic.pdf'
import meganbarry from '../stuff/2018/meganbarry.pdf'
import odyssey from '../stuff/2018/odyssey.pdf'
import surgery from '../stuff/2018/surgery.pdf'
import onesteptwostep from '../stuff/2019/onesteptwostep.pdf'
import commonapp from '../stuff/2019/commonapp.pdf'
import dec30 from '../stuff/2019/dec30.pdf'
import biology from '../stuff/2020/biology.pdf'
import business from '../stuff/2020/business.pdf'
import extendedessay from '../stuff/2020/extendedessay.pdf'
import french from '../stuff/2020/french.pdf'
import history from '../stuff/2020/history.pdf'
import math from '../stuff/2020/math.pdf'

const StyledAccordion = styled(Accordion)`
  margin: auto;
  width: 80%;
`

const WritingPage = () => {
  return (
    < >
      <Layout pageTitle="Writing">
        <StyledAccordion className="mt-3">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              2021 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>*In Progress</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              2020 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <a href={extendedessay} target="_blank" rel="noreferrer"><em>Translation in Poetry and Holy Text</em></a><br/>
                <a href={biology} target="_blank" rel="noreferrer"><em>The Effects of Varying Temperatures on Population Growth in Caenorhabditis Elegans</em></a><br/>
                <a href={business} target="_blank" rel="noreferrer"><em>Should Pakola Inc. Introduce Their Soda to Western Markets</em></a><br/>
                <a href={history} target="_blank" rel="noreferrer"><em>The Significance of the Tuskegee Syphilis Experiment on the US Civil Rights Movement</em></a><br/>
                <a href={math} target="_blank" rel="noreferrer"><em>Investigating the Mathematics of Avatar: The Last Airbender</em></a><br/>
                <a href={french} target="_blank" rel="noreferrer"><em>Cendrillon Essay en Français</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              2019 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              <a href={onesteptwostep} target="_blank" rel="noreferrer"><em>One Step, Two Step (Short Story)</em></a><br/>
              <a href={dec30} target="_blank" rel="noreferrer"><em>Dec. 30, 2018</em></a><br/>
              <a href={commonapp} target="_blank" rel="noreferrer"><em>Common Application Personal Statement</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              2018 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <a href={karachi} target="_blank" rel="noreferrer"><em>Karachi Poem (Original)</em></a><br/>
                <a href={surgery} target="_blank" rel="noreferrer"><em>Surgery Essay</em></a><br/>
                <a href={meganbarry} target="_blank" rel="noreferrer"><em>Email to Megan Barry</em></a><br/>
                <a href={odyssey} target="_blank" rel="noreferrer"><em>Odyssey Narrative</em></a><br/>
                <a href={magic} target="_blank" rel="noreferrer"><em>Magical Realism</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              2017 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <a href={freshmanseminar} target="_blank" rel="noreferrer"><em>Freshman Seminar Essay (Reflection)</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              2015 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <a href={trevecca} target="_blank" rel="noreferrer"><em>Trevecca Historical Narrative</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </StyledAccordion>
      </Layout>
    </>
  )
}

export default WritingPage;
