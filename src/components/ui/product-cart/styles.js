import styled from "styled-components";
import { Img } from "../../styled";
import Title from "../title/title";

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
