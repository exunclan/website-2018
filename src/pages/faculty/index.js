import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Splash from '../../components/Splash'
import Section from '../../components/Section'
import MemberCard from '../../components/MemberCard'

import departments from '../../../data/faculty'

const Faculty = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <Splash>
          <h1>Faculty</h1>
        </Splash>
      </Container>
    </Header>
    <main>
      <Container>
        {departments.map(department => (
          <Section key={department.title}>
            <h3>{department.title}</h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {department.members.map(member => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </Layout>
)

export default Faculty
