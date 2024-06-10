import styled, { css } from "styled-components";
import { Ul, Li, Button } from "../../styled";

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

export const TabButton = styled(Button)`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.panelBackgroundColor};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.fontColorBlack};
        `}
`;
