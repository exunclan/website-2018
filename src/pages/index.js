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

const Slant = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
`

const Cover = styled.img`
  max-height: 320px;
  margin-bottom: 2rem;
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
    const EventScroller = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      &::-webkit-scrollbar {
        background: transparent;
      }
    `

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
            View {this.state.active ? 'Less' : 'All'}
          </Button>
        </div>
        <EventScroller>
          {events.slice(0, this.state.active ? events.length : 3).map(event => (
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
