import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Section from '../components/Section'
import { Row, Column } from '../components/Grid'
import InviteForm from '../components/InviteForm'
import Schedule from '../components/Schedule'
import Events from '../components/Events'

import cover from './cover.svg'
import unirely from './unirely.png'
import digitalIndia from './digitalindia.png'
import athena from './athena.png'

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.img`
  max-height: 270px;
  margin-bottom: 1rem;
`

const SponsorImage = styled.img`
  display: inline-block;
  user-select: none;
  max-height: 7rem;
  vertical-align: middle;
  margin-bottom: 1rem;
  margin-top: none;
`

const Sponsors = styled.span`
  font-weight: bold;
`

const Box = styled.span`
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  font-size: 90%;
  color: inherit;
  white-space: nowrap;
  background: transparent;
  border: 1px solid currentColor;
  border-radius: 4px;
`

const Index = () => (
  <Layout>
    <Slant>
      <Header>
        <Navbar />
        <Container>
          <Splash>
            <div>
              <Cover src={cover} />
            </div>
            <h1>Exun 2018</h1>
            <h2>Bigger and better than ever before.</h2>
            <p>
              Join us in celebrating the spirit of technology.&nbsp;
              <Box>27-28 October</Box>
              <br />
              <br />
              <a
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontWeight: 'bold',
                  fontSize: '0.8em',
                  backgroundColor: '#fff',
                  padding: '10px 20px',
                  borderRadius: 100,
                  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.05)',
                }}
                className="link-styled"
                href="https://exun.co/details"
              >
                Details
              </a>
            </p>
            <div style={{ paddingTop: '4rem' }}>
              <InviteForm />
            </div>
            <Sponsors style={{ paddingTop: '4rem' }}>
              Supported by
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="//www.digitizeindia.gov.in"
              >
                <SponsorImage src={digitalIndia} />
              </a>
              Powered by
              <a rel="noopener noreferrer" target="_blank" href="//unirely.com">
                <SponsorImage src={unirely} />
              </a>
              <br />
              Co-sponsored by
              <a rel="noopener noreferrer" target="_blank" href="//google.com">
                <SponsorImage src={athena} />
              </a>
            </Sponsors>
          </Splash>
        </Container>
      </Header>
    </Slant>
    <main>
      <Section>
        <Container>
          <Row>
            <Column size={7}>
              <h3>This time, we&#39;re going national.</h3>
              <p>
                Exun has been organizing its flagship event for two decades.
                With Exun 2018, the event becomes the first national technology
                symposium for and by the students.
              </p>
            </Column>
            <Column size={5}>
              <div
                style={{
                  border: '1px solid #dfe1e5',
                  borderRadius: 10,
                  padding: '3rem',
                  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.05)',
                }}
              >
                <h4>Important Links</h4>
                <ul>
                  <li>
                    <a
                      className="link-styled"
                      href="https://www.facebook.com/events/1608746609432289/"
                    >
                      Facebook event
                    </a>
                  </li>
                  <li>
                    <a className="link-styled" href="https://exun.co/reg">
                      Registration
                    </a>
                  </li>
                  <li>
                    <a className="link-styled" href="https://exun.co/resources">
                      Learning Resources
                    </a>
                  </li>
                  <li>
                    <a className="link-styled" href="https://exun.co/details">
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container
          style={{
            backgroundColor: '#2977f511',
            padding: 30,
          }}
        >
          <strong>
            The following details (i.e. schedule and events) are not
            comprehensive &mdash; view{' '}
            <a className="link-styled" href="https://exun.co/details">
              exun.co/details
            </a>
            .
          </strong>
        </Container>
      </Section>
      <Section>
        <Container>
          <Schedule />
        </Container>
      </Section>
      <Section>
        <Container>
          <Events />
        </Container>
      </Section>
    </main>
  </Layout>
)

export default Index
