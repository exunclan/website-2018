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

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.img`
  max-height: 300px;
  margin-bottom: 2rem;
`

const UniRely = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-top: 1rem;
  opacity: 0.5;
  transition: opacity .6s;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 920px) {
    opacity: 1;
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
            <p style={{ color: "grey", marginBottom: "0px", marginTop: "1rem" }}>A Digital India Event</p>
            <h1>Exun 2018</h1>
            <h2>Bigger and better than ever before.</h2>
            <p>
              Join us in celebrating the spirit of technology.&nbsp;
              <Box>27-28 October</Box>
            </p>
            <div style={{ maxHeight: "8rem", userSelect: "none", opacity: 0.8, marginBottom: "2rem" }}>
              Powered By&nbsp;
              <a rel="noopener noreferer" target="_blank" href="//unirely.com">
                <UniRely src={unirely} />
              </a>
            </div>
            <div>
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
