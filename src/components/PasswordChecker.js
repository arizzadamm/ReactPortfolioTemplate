import React, { useState } from 'react';
import { Box, Typography, TextField, LinearProgress } from '@mui/material';

function checkStrength(password) {
  let score = 0;
  if (!password) return { label: 'Kosong', color: 'grey', value: 0 };
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score === 0) return { label: 'Lemah', color: 'red', value: 20 };
  if (score === 1) return { label: 'Lemah', color: 'red', value: 30 };
  if (score === 2) return { label: 'Sedang', color: 'orange', value: 60 };
  if (score === 3) return { label: 'Kuat', color: 'blue', value: 80 };
  if (score === 4) return { label: 'Sangat Kuat', color: 'green', value: 100 };
}

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const strength = checkStrength(password);

  return (
    <Box my={3}>
      <Typography variant="h6" mb={1}>Password Strength Checker</Typography>
      <TextField
        label="Masukkan Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Box display="flex" alignItems="center" gap={2}>
        <Box width={1}>
          <LinearProgress variant="determinate" value={strength.value} sx={{ height: 10, borderRadius: 5, background: '#eee', '& .MuiLinearProgress-bar': { backgroundColor: strength.color } }} />
        </Box>
        <Typography color={strength.color} minWidth={90}>{strength.label}</Typography>
      </Box>
    </Box>
  );
} 