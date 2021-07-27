import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './ThemeProvider';
import Routes from './routes/routes-dumb';

ReactDOM.render(
  <Theme>
    <Routes />
  </Theme>,
  document.getElementById('root'),
);
