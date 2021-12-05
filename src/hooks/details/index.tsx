import { memo } from 'react';
import { AppBar, Toolbar } from '@mui/material';

const ApplicationBar = function (): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default memo(ApplicationBar);