import styled from "styled-components";
import { Li } from "../../styled";

export const Option = styled(Li)`
  margin-bottom: 8px;
  font-size: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: bold;
`;
