import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Section from '../components/Section'
import { Row, Column } from '../components/Grid'

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Index = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <Slant>
      <Header>
        <Navbar />
        <Container>
          <Splash>
            <Row>
              <Column size="eight" offset="two">
                <Cover>
                  <div style={{ height: 300, width: 300 }}>
                    <Image fluid={fluid} />
                  </div>
                  <h1>e-Lite 2019</h1>
                  <h2>Do you have what it takes?</h2>
                  <p>
                    e-Lite, Exun’s annual induction test, is back.
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
                      href="https://exun.co/elite"
                    >
                      Register
                    </a>
                  </p>
                </Cover>
              </Column>
            </Row>
          </Splash>
        </Container>
      </Header>
    </Slant>
    <main>
      <Section>
        <Container>
          <Row>
            <Column size="seven">
              <h3>For Exun 2018, we went national.</h3>
              <p>
                Exun has been organizing its flagship event for two decades.
                Exun 2018 was the the first national technology symposium for
                and by the students.
              </p>
            </Column>
            <Column size="five">
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
                    <a href="https://exunclan.github.io/resources">Learning Resources</a>
                  </li>
                </ul>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
    </main>
  </Layout>
)
Index.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {
        fluid: PropTypes.any,
      },
    },
  }).isRequired,
}

export default Index

export const query = graphql`
  query {
    file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
