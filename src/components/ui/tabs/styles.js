import styled from "styled-components";
import { Ul, Li } from "../../styled";

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: overlay;
`;

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;
