import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media screen and (max-width: 425px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (max-width: 375px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (max-width: 320px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default Section;
