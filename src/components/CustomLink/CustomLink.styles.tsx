import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const CustomedLink = styled(Link)`
  margin-right: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #6B9080;
  &:last-of-type {
    margin-right: 0;
  }
`;