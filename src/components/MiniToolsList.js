import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PasswordChecker from './PasswordChecker';
import HashGenerator from './HashGenerator';
import CVESearch from './CVESearch';

export default function MiniToolsList() {
  return (
    <Box my={4} mx={'auto'} maxWidth={700}>
      <Typography variant="h4" mb={3} align="center">Mini Tools Cyber Security</Typography>
      <PasswordChecker />
      <Divider sx={{ my: 4 }} />
      <HashGenerator />
      <Divider sx={{ my: 4 }} />
      <CVESearch />
    </Box>
  );
} 