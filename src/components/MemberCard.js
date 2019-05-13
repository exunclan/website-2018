import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const MemberCard = ({ name, role, image }) => (
  <Card>
    {image !== '' && (
      <div
        style={{
          height: 100,
          width: 100,
          marginBottom: '2rem',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%',
          backgroundPosition: '50% 50%',
        }}
      />
    )}
    <h5 style={{ marginBottom: '1rem' }}>{name}</h5>
    <div style={{ fontWeight: 500, marginBottom: 0 }}>{role}</div>
  </Card>
)
MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default MemberCard
