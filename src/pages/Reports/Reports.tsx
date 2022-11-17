import React, {useMemo} from "react";
import participants from "../../mock/participants.json";
import {IParticipant, Profession} from "../../interfaces/interfaces";
import {CustomContainer} from "../../components/Container/Container";
import {FlexContainer, ReportBlock, Row} from "./Reports.styles";
import {CustomLink} from "../../components/CustomLink/CustomLink";

export const Reports: React.FC = () => {
  const filterByAge = (min: number, max?: number) => {
    return participants.filter((participant: IParticipant) =>
      max ? participant.age >= min && participant.age <= max : participant.age > min)
  }

  const filterByProfession= (profession: Profession) => {
    return participants.filter((participant: IParticipant) => participant.profession === profession);
  };

  const lessThan18 = useMemo(() => {
    return filterByAge(13, 18).length;
  }, []);

  const under25 = useMemo(() => {
    return filterByAge(19, 25).length;
  }, []);

  const above25 = useMemo(() => {
    return filterByAge(25).length;
  }, []);

  const students = useMemo(() => {
    return filterByProfession(Profession.Student).length;
  }, []);

  const employed = useMemo(() => {
    return filterByProfession(Profession.Employed).length;
  }, []);

  const peopleByLocalities = useMemo(() => {
    const result: Record<string, number> = {};
    participants.forEach((participant: IParticipant) => {
      const prevValue = result[participant.locality] ?? 0;
      result[participant.locality] = prevValue + 1;
    });
    return result;
  }, []);

  const averageGroupSize = useMemo(() => {
    const totalGuests = participants.reduce((acc, curr) => acc + curr.number_of_guest + 1, 0)
    return (totalGuests / participants.length).toFixed(2);
  }, [])

  return (
    <CustomContainer>
      <CustomLink to='/participants' text="List of participants" />
      <CustomLink to='/' text="Back to Home" />
      <h1>Reports</h1>
      <FlexContainer>
        <ReportBlock>
          <h4>Participants by age</h4>
          <div data-testid="less-than-18">13-18: {lessThan18}</div>
          <div data-testid="under-25">19-25: {under25}</div>
          <div data-testid="above-25">25+: {above25}</div>
        </ReportBlock>

        <ReportBlock>
          <h4>Profession</h4>
          <div>Students: {students}</div>
          <div>Employed: {employed}</div>
        </ReportBlock>

        <ReportBlock>
          <h4>Average Group Size of Participants with Guests:</h4>
          <div>{averageGroupSize}</div>
        </ReportBlock>
      </FlexContainer>

      <div>
        <h4>Participants By Localities</h4>
        <div>
          {Object.entries(peopleByLocalities).map(([key, value]) => (
            <Row key={key}>
              {key}: {value}
            </Row>
          ))}
        </div>
      </div>
    </CustomContainer>
  );
};
