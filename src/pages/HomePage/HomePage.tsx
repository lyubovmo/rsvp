import React from 'react';
import {Button, Container, Header, MainContainer} from './HomePage.styles';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <Header>Registration on ReactJS Meetup</Header>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </Container>
    </MainContainer>
  );
};