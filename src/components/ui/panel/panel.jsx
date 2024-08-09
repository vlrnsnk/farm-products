import styled from "styled-components";
import { Section } from "../../styled";

const Panel = styled(Section)`
  padding: ${(props) => props.theme.indent};
  padding-top: ${(props) => `${props.paddingTop}px` || props.themeIndent};
  padding-bottom: ${(props) =>
    `${props.paddingBottom}px` || props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  width: ${(props) => props.$width || "auto"};
  display: block;
  background-color: ${(props) => props.theme.colorWhite};

  @media screen and (max-width: 1279px) {
    display: flex;
  }

  @media screen and (max-width: 906px) {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  @media screen and (max-width: 396px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default Panel;
