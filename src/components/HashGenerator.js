import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';

const hashTypes = [
  { label: 'MD5', value: 'md5' },
  { label: 'SHA-1', value: 'sha1' },
  { label: 'SHA-256', value: 'sha256' },
];

async function generateHash(text, type) {
  if (type === 'md5') {
    if (window.md5) return window.md5(text);
    return 'MD5 tidak tersedia';
  }
  if (type === 'sha1' || type === 'sha256') {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const algo = type.replace('-', '').toUpperCase();
    const hashBuffer = await window.crypto.subtle.digest(algo, data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  return '';
}

export default function HashGenerator() {
  const [text, setText] = useState('');
  const [type, setType] = useState('md5');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const hash = await generateHash(text, type);
    setResult(hash);
    setLoading(false);
  };

  return (
    <Box my={3}>
      <Typography variant="h6" mb={1}>Hash Generator</Typography>
      <TextField
        label="Teks untuk di-hash"
        value={text}
        onChange={e => setText(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        select
        label="Tipe Hash"
        value={type}
        onChange={e => setType(e.target.value)}
        margin="normal"
        sx={{ minWidth: 120 }}
      >
        {hashTypes.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
      </TextField>
      <Button variant="contained" onClick={handleGenerate} disabled={loading || !text} sx={{ ml: 2 }}>
        {loading ? 'Memproses...' : 'Generate'}
      </Button>
      {result && (
        <Box mt={2}>
          <Typography variant="subtitle2">Hasil:</Typography>
          <Typography fontFamily="monospace" sx={{ wordBreak: 'break-all' }}>{result}</Typography>
        </Box>
      )}
    </Box>
  );
} 