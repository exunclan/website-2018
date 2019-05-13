import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Splash from '../../components/Splash'
import Section from '../../components/Section'
import MemberCard from '../../components/MemberCard'

import classes from '../../../data/members'

const Members = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <Splash>
          <h1>Members</h1>
        </Splash>
      </Container>
    </Header>
    <main>
      <Container>
        {classes.map(cls => (
          <Section key={cls.year}>
            <h3>{cls.year}</h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {cls.members.map(member => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </Layout>
)

export default Members
