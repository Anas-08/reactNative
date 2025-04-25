import React from 'react';
import RadioButton from './RadioButton';

const RadioButtonGroup = ({ options = [], selected, onChange, ...rest }) => {
  return options.map((label, i) => (
    <RadioButton
      key={i}
      label={label}
      selected={selected === label}
      onSelect={() => onChange(label)}
      {...rest}
    />
  ));
};

export default RadioButtonGroup;
