import { Grid, Typography } from '@mui/material';
import { type ReactElement, type ReactNode } from 'react';

interface authlayoutProps {
  title: string;
  children: ReactNode;
}

export const AuthLayout = ({
  children,
  title = '',
}: authlayoutProps): ReactElement => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
