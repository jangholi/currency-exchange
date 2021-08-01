import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ConversionTable from '../../components/tables/conversion-history';
import PageTitle from '../../components/typography/page-title';

function ConversionHistory() {
  return (
    <Grid item md={12}>
      <Box mb={2}>
        <PageTitle>
          Conversion history
        </PageTitle>
      </Box>
      <Box>
        <ConversionTable />
      </Box>
    </Grid>
  );
}

export default ConversionHistory;
