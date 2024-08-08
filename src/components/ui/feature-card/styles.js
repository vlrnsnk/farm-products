import styled from "styled-components";
import { Img, P } from "../../styled";

const Feature = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.$isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;

const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  margin-left: ${(props) => props.indent};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.$isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;

const Text = styled(P)`
  text-align: left;
`;

export { Feature, Image, Header, Owner, Text };
