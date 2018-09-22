import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'
import Splash from '../components/Splash'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { Row, Column } from '../components/Grid'
import InviteForm from '../components/InviteForm'

import events from '../../data/events'

import cover from './cover.svg'
import unirely from './unirely.png'
import digitalindia from './digitalindia.png'

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.img`
  max-height: 270px;
  margin-bottom: 1rem;
`

const DigitalIndia = styled.img`
  display: inline-block;
  user-select: none;
  max-height: 8rem;
  vertical-align: middle;
  margin-bottom: 1rem;
  margin-top: none;
  opacity: 0.85;
  transition: opacity .3s;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 920px) {
    opacity: 1;
  }
`

const UniRely = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-height: 8.1rem;
  opacity: 0.7;
  transition: opacity .6s;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 920px) {
    opacity: 1;
  }
`

const Sponsor = styled.div`
  max-height: "8rem";
  user-select: "none";
  opacity: 0.9;
  color: "grey";
  @media screen and (max-width: 920px) {
    width: 290px;
  }
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

const EventScroller = styled.div`
  display: flex;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    background: transparent;
  }
`

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h3 style={{ marginBottom: 0 }}>Events</h3>
          </div>
          <Button onClick={this.toggle} className="link-styled">
            View&nbsp;
            {active ? 'Less' : 'All'}
          </Button>
        </div>
        <EventScroller>
          {events.slice(0, active ? events.length : 3).map(event => (
            <Card key={event.name}>
              <h5>{event.name}</h5>
              <div>{event.description}</div>
            </Card>
          ))}
        </EventScroller>
      </div>
    )
  }
}

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
            </p>
            <Sponsor>
            A&nbsp;
              <a rel="noopener noreferer" target="_blank" href="//www.digitizeindia.gov.in"
                <DigitalIndia src={digitalindia} />
              </a>
            &nbsp;supported event powered by&nbsp;
              <a rel="noopener noreferer" target="_blank" href="//unirely.com">
                <UniRely src={unirely} />
              </a>
            </Sponsor>
            <div style={{ paddingTop:"4rem" }}>
              <InviteForm />
            </div>
          </Splash>
        </Container>
      </Header>
    </Slant>
    <main>
      <Section>
        <Container>
          <Row>
            <Column size={8}>
              <h3>National for the first time ever.</h3>
              <p>
                Exun has been organizing its flagship event for two decades.
                With Exun 2018, the event becomes the first national technology
                symposium for and by the students.
              </p>
            </Column>
          </Row>
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
