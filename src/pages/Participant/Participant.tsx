import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import participants from '../../mock/participants.json';
import { Info, Label, Row } from './Participant.styles';
import { IParticipant } from '../../interfaces/interfaces';
import { CustomContainer } from '../../components/Container/Container';

export const Participant: React.FC = () => {
  const [participant, setParticipant] = useState<IParticipant>();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    setParticipant(participants.find((item: IParticipant) => item.id === Number(id)));
  })
  return (
    <CustomContainer>
      <h1>Participant Info</h1>
      <Row>
        <Label>Name:</Label>
        <Info>{participant?.name}</Info>
      </Row>
      <Row>
        <Label>Age:</Label>
        <Info>{participant?.age}</Info>
      </Row>
      <Row>
        <Label>Date of birth:</Label>
        <Info>{participant?.date_of_birth}</Info>
      </Row>
      <Row>
        <Label>Profession:</Label>
        <Info>{participant?.profession}</Info>
      </Row>
      <Row>
        <Label>Locality:</Label>
        <Info>{participant?.locality}</Info>
      </Row>
      <Row>
        <Label>Number of guests:</Label>
        <Info>{participant?.number_of_guest}</Info>
      </Row>
      <Row>
        <Label>Address:</Label>
        <Info>{participant?.address}</Info>
      </Row>
    </CustomContainer>
  )
};