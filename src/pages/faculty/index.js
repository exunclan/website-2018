import React from 'react';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Splash from '../../components/Splash';
import Section from '../../components/Section';
import Card from '../../components/Card';

import departments from '../../../data/faculty';

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
                <Card key={member.name}>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      marginBottom: '2rem',
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '50%',
                      backgroundPosition: '50% 50%',
                    }}
                  />
                  <h5>{member.name}</h5>
                  <h6 style={{ fontWeight: 500 }}>{member.role}</h6>
                </Card>
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </Layout>
);

export default Faculty;
