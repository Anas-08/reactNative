import React from 'react';
import Checkbox from './Checkbox';

const CheckboxGroup = ({ options = [], selected = [], onChange, ...rest }) => {
  const toggle = (val) => {
    const next = selected.includes(val)
      ? selected.filter(i => i !== val)
      : [...selected, val];
    onChange(next);
  };

  return options.map((label, i) => (
    <Checkbox
      key={i}
      label={label}
      checked={selected.includes(label)}
      onChange={() => toggle(label)}
      {...rest}
    />
  ));
};

export default CheckboxGroup;
