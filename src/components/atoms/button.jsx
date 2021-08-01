import React from 'react';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      {loading && <CircularProgress size={20} />}
    </Button>
  );
}

export default AppButton;
