import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  background: linear-gradient( to bottom, #6B9080, #A4C3B2, #CCE3DE);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.h1`
  color: #463f3a;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #6B9080;
  background-color: #EAF4F4;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #EFF7F7;
  }
`;