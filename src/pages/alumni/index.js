import React from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Splash from '../../components/Splash';
import Section from '../../components/Section';
import Card from '../../components/Card';

import batches from './list';

const Alumni = () => (
  <div>
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
            <h3>Batch of {batch.year}</h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {batch.alumni.map(alum => (
                <Card key={alum.name}>
                  <h5>{alum.name}</h5>
                  <h6 style={{ fontWeight: 500 }}>{alum.role}</h6>
                </Card>
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </main>
  </div>
);

export default Alumni;
