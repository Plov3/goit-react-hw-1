import styled from 'styled-components';

export const Table = styled.table`
min-width: 400px;  
color: red;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Monaco';
  font-size: 14px;
  border-radius: 2px;
  border-collapse: collapse;
  overflow: hidden;
  padding: 5px;
`;

export const Th = styled.th`
  background-color: grey;
  padding: 10px;
  color: #fff;
`;

export const Td = styled.td`
  min-width: 80px;
  padding: 10px;
  text-align: center;
  border-right: 2px solid grey;
  &:last-child {
    border-right: none;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: lightgrey;
  }
`;