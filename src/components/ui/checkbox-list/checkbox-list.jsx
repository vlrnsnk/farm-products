import React from "react";
import { Ul, Li } from "../../styled";
import Checkbox from "../checkbox/checkbox";

function CheckboxList({
  isGridList,
  options,
  labelComponent,
  selectValues,
  name,
  onClickLabel = () => {},
  onChange,
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);

    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }

    onChange && onChange(newValue);
  };

  return (
    <Ul $isGridList={isGridList}>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
