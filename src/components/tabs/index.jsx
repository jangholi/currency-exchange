import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

function TabComponent({ history, data = [] }) {
  const handleTabChange = (e, val) => {
    history.push(val);
  };

  return (
    <Tabs
      value={history.location.pathname}
      onChange={handleTabChange}
      indicatorColor="primary"
    >
      {data.map((e) => (
        <Tab
          label={e.label}
          value={e.value}
        />
      ))}
    </Tabs>
  );
}

export default withRouter(TabComponent);
