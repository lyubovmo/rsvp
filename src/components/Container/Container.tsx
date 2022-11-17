import React from 'react';
import { Container } from './Container.styles';

interface IProps {
  children: React.ReactNode;
}

export const CustomContainer: React.FC<IProps> = ({children}: IProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}