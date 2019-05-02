import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Section from '../components/Section'
import { Row, Column } from '../components/Grid'

import cover from './cover.svg'
import appStoreBadge from './app-store-badge.svg'

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.img`
  max-height: 270px;
  margin-bottom: 1rem;
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
              Exun 2018 saw the participation of hundreds of people from around
              the country.
              <br />
              <br />
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
                rel="noopener noreferrer"
                target="_blank"
                href="https://exun.co/results"
              >
                Results
              </a>
            </p>
          </Splash>
        </Container>
      </Header>
    </Slant>
    <main>
      <Section>
        <Container>
          <Row>
            <Column size={7}>
              <h3>For Exun 2018, we went national.</h3>
              <p>
                Exun has been organizing its flagship event for two decades.
                Exun 2018 was the the first national technology symposium for
                and by the students.
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
                    <a href="https://www.facebook.com/ExunClan/">
                      Facebook page
                    </a>
                  </li>
                  <li>
                    <a href="https://exun.co/resources">Learning Resources</a>
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
    </main>
  </Layout>
)

export default Index
