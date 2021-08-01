import React from 'react';
import { Button } from '@material-ui/core';

function AppButton({
  children, loading = false, fill, clickHandler,
}) {
  return (
    <Button
      type="submit"
      disabled={loading}
      {...(fill ? { variant: 'contained' } : {})}
      color="primary"
      onClick={clickHandler}
    >
      {children}
      &nbsp;
      <i
        className="fa fa-spin fa-spinner fa-2x"
        style={loading ? {} : { display: 'none' }}
      />
    </Button>
  );
}

export default AppButton;
