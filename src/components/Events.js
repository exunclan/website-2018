import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import Button from './Button'

import events from '../../data/events'

const EventList = styled.div`
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
      search: '',
    }
    this.toggle = this.toggle.bind(this)
    this.renderInput = this.renderInput.bind(this)
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this)
  }

  toggle() {
    this.setState(prevState => ({ active: !prevState.active, search: '' }))
  }

  handleSearchBarChange(event) {
    this.setState({
      search: event.target.value,
    })
  }

  renderInput() {
    const { active, search } = this.state
    if (!active) return null
    return (
      <input
        type="text"
        style={{
          padding: '3rem',
          boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e1e1e1',
          borderRadius: 4,
          marginBottom: '3rem',
          width: '100%',
        }}
        placeholder="Search..."
        value={search}
        onChange={this.handleSearchBarChange}
      />
    )
  }

  render() {
    const { active, search } = this.state
    const query = new RegExp(search, 'gi')

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
        {this.renderInput()}
        <EventList>
          {events
            .slice(0, active ? events.length : 3)
            .filter(event => event.name.match(query))
            .map(event => (
              <Card key={event.name}>
                <h5>
                  <a
                    href={event.shortlink ? `https://exun.co/18/${event.shortlink}` : `https://exun.co/18/${event.name
                      .toLowerCase()
                      .replace(' ', '')
                      .replace('-', '')}`}
                  >
                    {event.name}
                  </a>
                </h5>
                <div>{event.description}</div>
              </Card>
            ))}
        </EventList>
      </div>
    )
  }
}

export default Events
