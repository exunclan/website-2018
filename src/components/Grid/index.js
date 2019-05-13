import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const Container = ({ children, style }) => (
  <div className={styles.container} style={style}>
    {children}
  </div>
)
Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}
Container.defaultProps = {
  style: {},
}

export const Column = ({ children, size, offset, style }) => (
  <div
    className={`${styles[size]} ${styles.columns} ${
      offset || offset === 'zero' ? styles[`offset-by-${offset}`] : ''
    }`}
    style={style}
  >
    {children}
  </div>
)
Column.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'one-third',
    'two-thirds',
    'one-half',
  ]).isRequired,
  offset: PropTypes.oneOf([
    '',
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'one-third',
    'two-thirds',
    'one-half',
  ]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}
Column.defaultProps = {
  offset: '',
  style: {},
}

export const Row = ({ children, style }) => (
  <div className={styles.row} style={style}>
    {children}
  </div>
)
Row.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}
Row.defaultProps = {
  style: {},
}
