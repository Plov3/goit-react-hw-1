import styled from 'styled-components';

export const Section = styled.section`
    min-width: 400px;
  background-color: grey;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  padding: 15px;
  color: #fff;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  border-top: 1px solid #fff;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  font-family: 'Monaco';
  min-width: 60px;
  font-weight: 700;
  color: red;
  background-color: yellow;
`;

export const Label = styled.span`
  font-size: 24px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;