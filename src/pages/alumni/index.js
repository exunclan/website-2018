import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Splash from '../../components/Splash'
import Section from '../../components/Section'
import MemberCard from '../../components/MemberCard'

import batches from '../../../data/alumni'

const Alumni = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <Splash>
          <h1>Alumni</h1>
        </Splash>
      </Container>
    </Header>
    <main>
      <Container>
        {batches.map(batch => (
          <Section key={batch.year}>
            <h3>
              Batch of
              {` ${batch.year}`}
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {batch.alumni.map(alum => (
                <MemberCard key={alum.name} {...alum} />
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </Layout>
)

export default Alumni
