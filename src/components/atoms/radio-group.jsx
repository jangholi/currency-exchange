import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    flexDirection: 'row',
    float: 'right',
  },
}));

function RadioButtonsGroup({ options, changeHandler, initialValue }) {
  const [value, setValue] = React.useState('female');
  const classes = useStyles();

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    changeHandler(val);
  };

  React.useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  return (
    <RadioGroup
      aria-label="gender"
      name="gender1"
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {options.map((e) => (
        <FormControlLabel
          value={e.value}
          key={e.value}
          control={<Radio />}
          label={e.label}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioButtonsGroup;
