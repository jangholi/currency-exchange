import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ConversionTable from '../../components/tables/conversion-history';
import PageTitle from '../../components/typography/page-title';
import { getHistory } from '../../utils/LocalStorageManagement';

function ConversionHistory() {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <Grid item md={12}>
      <Box mb={2}>
        <PageTitle>
          Conversion history
        </PageTitle>
      </Box>
      <Box>
        <ConversionTable
          history={history}
          updateHistory={() => setHistory(getHistory())}
        />
      </Box>
    </Grid>
  );
}

export default ConversionHistory;
