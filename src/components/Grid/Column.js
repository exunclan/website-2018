import React from 'react';
import styled from 'styled-components';

const sizes = [
  '4.66666666667%',
  '13.3333333333%',
  '22%',
  '30.6666666667%',
  '39.3333333333%',
  '48%',
  '56.6666666667%',
  '65.3333333333%',
  '74%',
  '82.6666666667%',
  '91.3333333333%',
  '100%',
];

const offsets = [
  '8.66666666667%',
  '17.3333333333%',
  '26%',
  '34.6666666667%',
  '43.3333333333%',
  '52%',
  '60.6666666667%',
  '69.3333333333%',
  '78%',
  '86.6666666667%',
  '95.3333333333%',
];

export default ({ size, offset, children, style }) => {
  const width = sizes[size - 1] || '100%';
  let marginLeft;
  if (offset) {
    marginLeft = offsets[offset - 1] || '4%';
  } else if (width === '100%') {
    marginLeft = 0;
  } else {
    marginLeft = '4%';
  }

  const Column = styled.div`
    width: 100%;
    float: left;
    box-sizing: border-box;

    &:first-child {
      margin-left: 0;
    }

    @media (min-width: 550px) {
      width: ${width};
      marginleft: ${marginLeft};
    }
  `;

  return <Column style={style}>{children}</Column>;
};
