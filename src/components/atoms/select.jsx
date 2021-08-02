import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function AppSelectbox({ options, changeHandler, initialValue }) {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  return (
    <Select
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        changeHandler(event.target.value);
      }}
    >
      {options.map((e) => (
        <MenuItem
          value={e.key}
          key={e.key}
        >
          {e.value}
        </MenuItem>
      ))}
    </Select>
  );
}

export default AppSelectbox;
