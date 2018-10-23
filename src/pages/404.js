import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Container from '../components/Container'

const NotFoundPage = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <div
          style={{
            minHeight: '95vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>404 Not Found</h1>
          <p>
            The page you&#39;re looking for wasn&#39;t found.
            <br />
          </p>
          <p
            style={{
              textAlign: 'center',
            }}
          >
            <Link to="/">Go Home</Link>
          </p>
        </div>
      </Container>
    </Header>
  </Layout>
)

export default NotFoundPage
