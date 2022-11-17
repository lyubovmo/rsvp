import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const List = styled.div`
  margin-top: 40px;
`;
export const RowTitle = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 300px);
  padding: 12px;
`;

export const Row = styled(Link)`
  padding: 12px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 300px);
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:nth-child(2n+1) {
    background-color: #CCE3DE;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ParticipantInfo = styled.div`
  padding-right: 10px;
  font-size: 16px;
  &:last-child {
    padding-right: 0;
  }
`;

export const InputRow = styled.div`
  margin: 30px 0;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 6px;
  margin: 0;
  display: block;
  font-size: 14px;
  border: 1px solid #c0c4d6;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;