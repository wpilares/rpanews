import { Box } from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';
import { NavBar } from '../components';

interface journalLayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

export const JournalLayout = ({
  children,
}: journalLayoutProps): ReactElement => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
