import styled from 'styled-components';

export const List = styled.ul`
    min-width: 370px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: grey;
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;
export const Item = styled.li`
  background-color: #fff;
  border-radius: 2px;
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;