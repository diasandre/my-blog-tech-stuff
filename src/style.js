import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45rem;
  margin: 3rem auto 6rem;
  padding: 0 1rem;
  font-size: 1.25em;
`;

export const Tag = styled.div`
  background-color:  ${props => props.color};
  padding: 5px;
  border-radius: 5px;
  height: 13px;
  font-size: 0.65em;
  margin: 0 0 0 10px;
  font-weight: 600;
`