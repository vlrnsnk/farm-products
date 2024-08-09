import styled, { css } from "styled-components";
import { Ul, Li, Button } from "../../styled";

export const Header = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  
  @media screen and (max-width: 1279px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: overlay;
  margin-bottom: 8px;
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
