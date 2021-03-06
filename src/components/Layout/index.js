import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../Footer'

import favicon from './favicon.png'
import './normalize.css'
import './index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Exun Clan"
      meta={[
        {
          name: 'description',
          content:
            'Exun Clan is the computer club at Delhi Public School, R.K. Puram',
        },
      ]}
      link={[
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: `${favicon}`,
        },
      ]}
    />
    <div>{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}
Layout.defaultProps = {
  children: null,
}

export default Layout
