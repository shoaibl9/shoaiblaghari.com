import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Card, Accordion } from 'react-bootstrap'

import trevecca from '../assets/files/2015/trevecca.pdf'
import freshmanseminar from '../assets/files/2017/freshmanseminar.pdf'
import karachi from '../assets/files/2018/karachi.pdf'
import magic from '../assets/files/2018/magic.pdf'
import meganbarry from '../assets/files/2018/meganbarry.pdf'
import odyssey from '../assets/files/2018/odyssey.pdf'
import surgery from '../assets/files/2018/surgery.pdf'
import onesteptwostep from '../assets/files/2019/onesteptwostep.pdf'
import commonapp from '../assets/files/2019/commonapp.pdf'
import writtentask from '../assets/files/2019/writtentask.pdf'
import dec30 from '../assets/files/2019/dec30.pdf'
import biology from '../assets/files/2020/biology.pdf'
import business from '../assets/files/2020/business.pdf'
import extendedessay from '../assets/files/2020/extendedessay.pdf'
import french from '../assets/files/2020/french.pdf'
import history from '../assets/files/2020/history.pdf'
import math from '../assets/files/2020/math.pdf'
import pols203paper1 from '../assets/files/2021/pols203paper1.pdf'
import pols203paper2 from '../assets/files/2021/pols203paper2.pdf'
import pols203paper3 from '../assets/files/2021/pols203paper3.pdf'
import spatialautobiography from '../assets/files/2021/spatialautobiography.pdf'
import cse373blogpost from '../assets/files/2022/cse373blogpost.pdf'
import econhonorswriting from '../assets/files/2022/econhonorswriting.pdf'
import urdu102final from '../assets/files/2022/urdu102final.pdf'

const StyledAccordion = styled(Accordion)`
  margin: auto;
  width: 80%;
`

const WritingPage = () => {
  return (
    < >
      <Layout pageTitle="Writing">
        <StyledAccordion className="mt-3">
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="0">
              2022 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <a href={cse373blogpost} target="_blank" rel="noreferrer"><em>CSE 373 Blog Post</em></a><br/>
                <a href={econhonorswriting} target="_blank" rel="noreferrer"><em>Writing Sample For Econ Honors</em></a><br/>
                <a href={urdu102final} target="_blank" rel="noreferrer"><em>Urdu 102 Final Reflection</em></a><br/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="1">
              2021 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <a href={pols203paper1} target="_blank" rel="noreferrer"><em>Tensions Over Kashmir</em></a><br/>
                <a href={pols203paper2} target="_blank" rel="noreferrer"><em>Environmental Sustainability Through International Trade</em></a><br/>
                <a href={pols203paper3} target="_blank" rel="noreferrer"><em>Global Governance and Transnational Relations</em></a><br/>
                <a href={spatialautobiography} target="_blank" rel="noreferrer"><em>Spatial Autiobiography</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="2">
              2020 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <a href={extendedessay} target="_blank" rel="noreferrer"><em>Translation in Poetry and Holy Text</em></a><br/>
                <a href={biology} target="_blank" rel="noreferrer"><em>Caenorhabditis Elegans (Biology Experiment)</em></a><br/>
                <a href={business} target="_blank" rel="noreferrer"><em>Pakola Inc. (Business Analysis)</em></a><br/>
                <a href={history} target="_blank" rel="noreferrer"><em>Tuskegee Syphilis Experiment (US History Paper)</em></a><br/>
                <a href={math} target="_blank" rel="noreferrer"><em>Investigating the Mathematics of Avatar: The Last Airbender</em></a><br/>
                <a href={french} target="_blank" rel="noreferrer"><em>Cendrillon Essay en Français</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="3">
              2019 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
              <a href={onesteptwostep} target="_blank" rel="noreferrer"><em>One Step, Two Step (Short Story)</em></a><br/>
              <a href={dec30} target="_blank" rel="noreferrer"><em>Dec. 30, 2018</em></a><br/>
              <a href={commonapp} target="_blank" rel="noreferrer"><em>Common Application Personal Statement</em></a><br/>
              <a href={writtentask} target="_blank" rel="noreferrer"><em>Extension of Kurt Vonnegut's Slaughterhouse Five</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="4">
              2018 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <a href={karachi} target="_blank" rel="noreferrer"><em>Karachi Poem (Original)</em></a><br/>
                <a href={surgery} target="_blank" rel="noreferrer"><em>Surgery Essay</em></a><br/>
                <a href={meganbarry} target="_blank" rel="noreferrer"><em>Email to Megan Barry</em></a><br/>
                <a href={odyssey} target="_blank" rel="noreferrer"><em>Odyssey Narrative</em></a><br/>
                <a href={magic} target="_blank" rel="noreferrer"><em>Magical Realism</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="5">
              2017 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <a href={freshmanseminar} target="_blank" rel="noreferrer"><em>Freshman Seminar Essay (Reflection)</em></a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="6">
              2015 Writings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
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
