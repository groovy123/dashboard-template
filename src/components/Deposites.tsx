import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Deposits() {
  return (
    <React.Fragment>
      <Title>７月のトータル収支</Title>
      <Typography component="p" variant="h5">
        投資：52,000
      </Typography>
      <Typography component="p" variant="h5">
        回収：52,000
      </Typography>
      <Typography component="p" variant="h5">
        回収率：100%
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        7/26現在
      </Typography>
    </React.Fragment>
  );
}