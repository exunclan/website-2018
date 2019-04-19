import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Splash from '../../components/Splash'
import Section from '../../components/Section'

const About = () => (
  <Layout>
    <Header>
      <Navbar />
      <Container>
        <Splash>
          <h1>About</h1>
        </Splash>
      </Container>
    </Header>
    <main>
      <Container>
        <Section>
          <p style={{ textAlign: 'justify' }}>
            Exun, the computer club at Delhi Public School, R.K. Puram, stands
            for Experts Unlimited. Our motto is &quot;We, not I&quot;, which, in
            essence, means that we believe in team spirit. Exun was started in
            1992 by the Head of Department, Computer Science, Mr. Mukesh Kumar,
            and a small group of talented students. It is today a 50+ member
            organisation with its members standing out in various fields like
            programming, tech quizzing, web design &amp; development, digital
            imaging, 3D design &amp; animation, 2D animation and video and audio
            editing. Exun members form an elite team of computer enthusiasts of
            all ages. They have represented the school in various computer
            symposiums in India and around the world and have collectively won
            several thousand awards.
          </p>
        </Section>
        <Section>
          <h3>Event History</h3>
          <p>
            Having represented the school in various computing symposia in India
            and around the world, the club also hosts its annual computer
            symposium, Exun. Exun has been held 23 times and has been a great
            success each time.
          </p>
          <table>
            <tbody>
              <tr>
                <th>Symposium</th>
                <th>Sponsor</th>
              </tr>
              <tr>
                <td>Exun 2018</td>
                <td>
                  UniRely, Athena Education, Pearl Academy, Supported by Digital
                  India
                </td>
              </tr>
              <tr>
                <td>Exun 2017</td>
                <td>Bennett University, AVIT, USA Univquest, Sony</td>
              </tr>
              <tr>
                <td>Exun 2016</td>
                <td>
                  Sony, Playstation, Zeiss, Bennett University, Avit, Cubelelo
                </td>
              </tr>
              <tr>
                <td>Exun 2015</td>
                <td>Intel, Unity Group, Microsoft Research, SmartEdu</td>
              </tr>
              <tr>
                <td>Exun 2014</td>
                <td>
                  Intel, Crompton, T.I.M.E., Compton Computers (P) Limited
                </td>
              </tr>
              <tr>
                <td>Exun 2013</td>
                <td>Intel, InSynegy</td>
              </tr>
              <tr>
                <td>Exun 2012</td>
                <td>Intel</td>
              </tr>
              <tr>
                <td>Exun 2011</td>
                <td>Intel</td>
              </tr>
              <tr>
                <td>Exun 2010</td>
                <td>NIIT eGuru, Masonite, Xtreme Gaming</td>
              </tr>
              <tr>
                <td>Exun 2009</td>
                <td>
                  Norton (Symantec), Xsys Technologies, RX Infotech Pvt. Ltd,
                  Dominos Pizza
                </td>
              </tr>
              <tr>
                <td>Exun 2008</td>
                <td>Mangalayatan University</td>
              </tr>
              <tr>
                <td>Exun 2007</td>
                <td>Pavna</td>
              </tr>
              <tr>
                <td>Exun 2006</td>
                <td>HP</td>
              </tr>
              <tr>
                <td>Exun 2005</td>
                <td>Sony</td>
              </tr>
              <tr>
                <td>Exun 2004</td>
                <td>HCL Infosystems</td>
              </tr>
              <tr>
                <td>Exun 2003</td>
                <td>HCL Infosystems</td>
              </tr>
              <tr>
                <td>Exun 2002</td>
                <td>Legris</td>
              </tr>
              <tr>
                <td>Exun 2001</td>
                <td />
              </tr>
              <tr>
                <td>Exun 2000</td>
                <td>eGurucool.com</td>
              </tr>
              <tr>
                <td>Exun 1999</td>
                <td>MantraOnline</td>
              </tr>
              <tr>
                <td>Exun 1998</td>
                <td>HCL</td>
              </tr>
              <tr>
                <td>Exun 1997</td>
                <td>NIIT</td>
              </tr>
              <tr>
                <td>Exun 1996</td>
                <td>HCL Infosystems</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Container>
    </main>
  </Layout>
)

export default About
