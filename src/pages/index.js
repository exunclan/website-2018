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
import pointsTable from './points-table.png'
import pearl from './pearl.png'
import appStoreBadge from './app-store-badge.svg'

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
                href="https://exun.co/details"
              >
                Details
              </a>
              <a
                style={{
                  marginLeft: 10,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontWeight: 'bold',
                  fontSize: '0.8em',
                  backgroundColor: '#fff',
                  padding: '10px 20px',
                  borderRadius: 100,
                  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.05)',
                }}
                href="https://exun.co/18/prelims"
              >
                Prelim Results
              </a>
            </p>
            <div style={{ paddingTop: '4rem' }}>
              <div style={{
                padding: '1rem',
                textAlign: 'center'
              }}>
                Registration will close today at 3PM.<br/> No changes will be allowed to a school&#39;s list of participants onsite. 
              </div>
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://athenaeducation.co.in/exun"
              >
                <SponsorImage src={athena} />
              </a>
              and&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="//pearlacademy.com"
              >
                <SponsorImage
                  src={pearl}
                  style={{ maxHeight: '5rem', paddingTop: '1rem' }}
                />
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
                }}
              >
                <h4>Important Links</h4>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/events/1608746609432289/">
                      Facebook event
                    </a>
                  </li>
                  <li>
                    <a href="https://exun.co/reg">Registration</a>
                  </li>
                  <li>
                    <a href="https://exun.co/resources">Learning Resources</a>
                  </li>
                  <li>
                    <a href="https://exun.co/details">Details</a>
                  </li>
                  <li>
                    <a href={pointsTable}>Points table</a>
                  </li>
                </ul>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Column size={7}>
              <h3>Get the app</h3>
              <p>
                Use the Exun 2018 app to receive updates, view schedules and
                remain up to date about Exun 2018!
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <a href="https://play.google.com/store/apps/details?id=com.exun2018&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img
                    style={{
                      width: 180,
                      marginLeft: -12,
                    }}
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  />
                </a>
                <a href="https://itunes.apple.com/us/app/exun-2018/id1439880657?mt=8">
                  <img
                    style={{
                      width: 150,
                      marginLeft: 10,
                    }}
                    alt="Download on the App Store"
                    src={appStoreBadge}
                  />
                </a>
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
            <a href="https://exun.co/details">exun.co/details</a>.
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
