import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Table = styled.table`
  font-size: 0.9em;
  border-collapse: collapse;
  th,
  td {
    text-align: center;
    border: 1px solid #e1e1e1;
  }
`

const OnlinePrelim = styled.span`
  color: #bf2020
`

const DayOne = () => (
  <Table>
    <thead>
      <tr>
        <th>Day One</th>
        <th>AVH</th>
        <th>Computer Labs</th>
        <th>Seminar Room</th>
        <th>OAT</th>
        <th>Seminar Studio</th>
        <th>OAT Classrooms</th>
        <th>Classrooms</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>8:30</td>
        <td>Reporting Time</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>9:00</td>
        <td>Inauguration</td>
        <td />
        <td rowSpan={8}>Cubing Events (Prelims)</td>
        <td rowSpan={9}>RoboWars (Prelims)</td>
        <td rowSpan={14}><OnlinePrelim>SpaceTech (Finals)*</OnlinePrelim></td>
        <td rowSpan={11}>Line Follower (Round 1 & 2)</td>
        <td rowSpan={2}>Junior Quiz Prelims + <OnlinePrelim>GD (Round 1)*</OnlinePrelim></td>
      </tr>
      <tr>
        <td>9:30</td>
        <td />
        <td rowSpan={13}>
          <OnlinePrelim>Mar-athon*</OnlinePrelim>
          <br />
          <br />
          <OnlinePrelim>Domain
          <sup>2</sup>+ Gaming*</OnlinePrelim>
          <br />
          <br />
          Girls Surprise
          <br />
          <br />
          <OnlinePrelim>Build (Finals)*</OnlinePrelim>
        </td>
      </tr>
      <tr>
        <td>10:00</td>
        <td />
        <td rowSpan={2}>Senior Quiz (Prelims) + <OnlinePrelim>GD (Round 1)*</OnlinePrelim></td>
      </tr>
      <tr>
        <td>10:30</td>
        <td />
      </tr>
      <tr>
        <td>11:00</td>
        <td rowSpan={4}><OnlinePrelim>Crossword (Finals)*</OnlinePrelim></td>
        <td rowSpan={2}><OnlinePrelim>GD (Round 1) + Turing Test*</OnlinePrelim></td>
      </tr>
      <tr>
        <td>11:30</td>
      </tr>
      <tr>
        <td>12:00</td>
        <td rowSpan={7}><OnlinePrelim>Turing Test*</OnlinePrelim></td>
      </tr>
      <tr>
        <td>12:30</td>
      </tr>
      <tr>
        <td>1:00</td>
        <td rowSpan={6}><OnlinePrelim>Group Discussion (Round 2)*</OnlinePrelim></td>
        <td />
      </tr>
      <tr>
        <td>1:30</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2:00</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2:30</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>3:00</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>3:30</td>
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </Table>
)

const DayTwo = () => (
  <Table>
    <thead>
      <tr>
        <th>Day Two</th>
        <th>AVH</th>
        <th>Computer Labs</th>
        <th>Shogun Lab</th>
        <th>Seminar Room</th>
        <th>Seminar Studio</th>
        <th>OAT</th>
        <th>OAT Classrooms</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:30</td>
        <td>Reporting Time</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>9:00</td>
        <td />
        <td rowSpan={11}>
          <OnlinePrelim>Domain2+ Gaming (Finals)*</OnlinePrelim>
          <br />
          <br />
          Delhi-NCR Gaming (Finals)
          <br />
          <br />
          <OnlinePrelim>Build (Finals)*</OnlinePrelim>
          <br />
          <br />
          <OnlinePrelim>Hardware*</OnlinePrelim>
          <br />
          <br />
          <OnlinePrelim>Competitive Programming*</OnlinePrelim>
        </td>
        <td rowSpan={5}><OnlinePrelim>Surprise (Finals)*</OnlinePrelim></td>
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>9:30</td>
        <td rowSpan={4}>Junior Quiz (Finals)</td>
        <td rowSpan={8}>Cubing Events (Finals)</td>
        <td rowSpan={8}>SpaceTech (Finals)*</td>
        <td rowSpan={3}>RoboWars</td>
        <td rowSpan={8}>Line Follower (Round 3)</td>
      </tr>
      <tr>
        <td>10:00</td>
      </tr>
      <tr>
        <td>10:30</td>
      </tr>
      <tr>
        <td>11:00</td>
        <td />
      </tr>
      <tr>
        <td>11:30</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>12:00</td>
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>12:30</td>
        <td rowSpan={5}>Senior Quiz Finals</td>
        <td />
      </tr>
      <tr>
        <td>1:00</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>1:30</td>
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>2:00</td>
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>2:30</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>3:00</td>
        <td rowSpan={2}>Prize Distribution Ceremony</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>3:30</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </Table>
)

class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dayOne: true,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({ dayOne: !prevState.dayOne }))
  }

  renderTable() {
    const { dayOne } = this.state
    if (dayOne) {
      return <DayOne />
    }
    return <DayTwo />
  }

  render() {
    const { dayOne } = this.state
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
            <h3 style={{ marginBottom: 0 }}>Schedule</h3>
          </div>
          <Button onClick={this.toggle}>Day {dayOne ? 1 : 2} (toggle)</Button>
        </div>
        <div style={{ overflowX: 'auto' }}>{this.renderTable()}</div>
        <p>
          <strong>
            <OnlinePrelim>* marked events are only for qualifiers of the online prelims</OnlinePrelim>
          </strong>
        </p>
      </div>
    )
  }
}

export default Schedule
