import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  display: inline-block;
  height: 45px;
  padding: 0 22px;
  color: #2977f5;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  outline: 0;
  border-radius: 2px;
  cursor: pointer;
  box-sizing: border-box;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`;

const PrimaryButton = styled(DefaultButton)`
  background-color: #2977f5;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.9);
  display: block;
  transform: translateY(0);
  transition-property: background-color, transform, box-shadow;

  &:hover {
    box-shadow: 0 4px 12px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const Button = ({ primary = false, ...props }) => {
  const Component = primary ? PrimaryButton : DefaultButton;
  return <Component {...props} />;
};

export default Button;
