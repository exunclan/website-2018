import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Splash from '../../components/Splash'
import Section from '../../components/Section'
import Card from '../../components/Card'

import contacts from '../../../data/contacts'

const Members = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <Splash>
          <h1>Contact</h1>
        </Splash>
      </Container>
    </Header>
    <main>
      <Section>
        <Container>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {contacts.map(contact => (
              <Card key={contact.name}>
                <h5>{contact.name}</h5>
                <h6 style={{ fontWeight: 500 }}>{contact.role}</h6>
                <a
                  style={{ marginBottom: '0.5rem' }}
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
                <a href={`tel:${contact.number}`}>{contact.number}</a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  </Layout>
)

export default Members
