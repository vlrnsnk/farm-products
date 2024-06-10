import React from "react";
import { Ul } from "../../styled";
import { Option, Property } from "./styles";

function OptionsList({ list = [], delimiter = ": " }) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Option key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimiter}
          </Property>
          {option.value}
        </Option>
      ))}
    </Ul>
  );
}

export default OptionsList;
