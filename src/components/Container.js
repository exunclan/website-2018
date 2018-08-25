import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 90%;
    padding: 0;
  }

  @media (min-width: 550px) {
    width: 80%;
  }
`;

export default Container;
