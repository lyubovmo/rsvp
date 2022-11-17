import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ReportBlock = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 12px 24px;
  flex: 1;
  border: 1px solid #A4C3B2;
  border-radius: 4px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Row = styled.div`
  padding: 12px;
  color: #000;
  &:nth-child(2n+1) {
    background-color: #CCE3DE;
  }
`;