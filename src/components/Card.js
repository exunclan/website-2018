import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  flex-basis: 31.333333333%;
  padding: 3rem;
  margin-right: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 900px) {
    flex-basis: 100%;
    margin-right: 0;
  }
`;

export default Card;
