import React from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Splash from '../../components/Splash';
import Section from '../../components/Section';
import Card from '../../components/Card';

import classes from '../../../data/members';

const Members = () => (
  <div>
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
                <Card key={member.name}>
                  <h5>{member.name}</h5>
                  <h6 style={{ fontWeight: 500 }}>{member.role}</h6>
                </Card>
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </div>
);

export default Members;
