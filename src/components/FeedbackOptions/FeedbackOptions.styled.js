import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;
export const Button = styled.button`
  width: 160px;
  margin: 0;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  box-shadow: 10px 5px 5px rgb(170 105 105);
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 60px;
  }
`;
