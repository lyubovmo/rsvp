import React, {ChangeEvent, useEffect, useState} from 'react';
import participantsData from '../../mock/participants.json';
import { List, Row, ParticipantInfo, Title, RowTitle, InputRow, Input } from "./Participants.styles";
import { IParticipant } from '../../interfaces/interfaces';
import { CustomContainer } from '../../components/Container/Container';
import { CustomLink } from '../../components/CustomLink/CustomLink';

export const Participants: React.FC = () => {
  const [participants, setParticipants] = useState<IParticipant[]>();
  const [search, setSearch] = useState<string>('');
  const [emptyMessage, setEmptyMessage] = useState<boolean>(false);

  useEffect(() => {
    setEmptyMessage(false);
    if(!search) {
      setParticipants(participantsData);
    } else {
      const filtered = participants?.filter(participant =>
        participant.name.toLowerCase().includes(search.toLowerCase())
        || participant.locality.toLowerCase().includes(search.toLowerCase())
      )
      return filtered?.length ? setParticipants(filtered) : setEmptyMessage(true);
    }
  }, [search]);

  return (
    <CustomContainer>
      <CustomLink to='/reports' text="More about event" />
      <CustomLink to='/' text="Back to Home" />
      <InputRow>
        <Input
          placeholder="Search by name or locality"
          data-testid="searchInput"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </InputRow>
      <h1>List of participants</h1>
      {emptyMessage
      ? <div>There is nothing with this search result</div>
      : <List>
          <RowTitle>
            <Title>Name</Title>
            <Title>Locality</Title>
          </RowTitle>
          {participants?.map(participant => (
            <Row data-testId="participant" to={`/participant/${participant.id}`} target="_blank" key={participant.id}>
              <ParticipantInfo>{participant.name}</ParticipantInfo>
              <ParticipantInfo>{participant.locality}</ParticipantInfo>
            </Row>
          ))}
        </List>
      }
    </CustomContainer>
  );
};