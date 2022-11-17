import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  margin-bottom: 16px;
  width: 50%;
  box-sizing: border-box;
  &:nth-of-type(odd) {
    padding-right: 10px;
  }
`;

export const Label = styled.label`
  padding-bottom: 8px;
  display: block;
  font-size: 16px;
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

export const Select = styled.select`
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

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 8px 6px;
  margin: 0;
  display: block;
  font-size: 14px;
  border: 1px solid #c0c4d6;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  resize: none;
`;

export const ButtonRow = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  background-color: #A4C3B2;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #B6D0C2;
  }
  &:disabled {
    background-color: #A4C3B2;
    opacity: .6;
  }
`;

export const ErrorSpan = styled.span`
  font-size: 12px;
  color: red;
`;

export const SuccessMessage = styled.div`
  padding: 40px;
  text-align: center;
`;

export const SuccessTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
`;