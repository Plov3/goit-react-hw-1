import styled from 'styled-components';

export const Name = styled.p`
  font-family: 'Monaco';
  font-size: 24px;
  color: red;
`;

export const Thumb = styled.div`
  border: ${({ isOnline }) =>
    isOnline ? '2px solid rgba(35,223,135,1)' : '2px solid rgba(241,50,89,1)'};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ isOnline }) =>
    isOnline
      ? '1px -1px 12px 1px rgba(35,223,135,1)'
      : '1px -1px 12px 1px rgba(241,50,89,1)'};
`;

export const Avatar = styled.img`
  width: 65%;
`;