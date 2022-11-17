import React from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { Container } from './App.styles';
import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Participants } from './pages/Participants/Participants';
import {Participant} from "./pages/Participant/Participant";
import {Reports} from "./pages/Reports/Reports";

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/participants' element={<Participants />} />
        <Route path='/participant/:id' element={<Participant />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </Container>
  );
}

export default App;
