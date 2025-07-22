import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, Link, CircularProgress } from '@mui/material';

// API publik: https://cve.circl.lu/api/search/<keyword>
const API_BASE = 'https://cve.circl.lu/api/search/';

export default function CVESearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const res = await fetch(API_BASE + encodeURIComponent(query));
      const data = await res.json();
      setResults(data && data.results ? data.results.slice(0, 7) : []);
    } catch (e) {
      setError('Gagal mengambil data CVE');
    }
    setLoading(false);
  };

  return (
    <Box my={3}>
      <Typography variant="h6" mb={1}>CVE Search</Typography>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Cari CVE (keyword/tahun)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch} disabled={loading || !query}>
          Cari
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      <List>
        {results.map((item, idx) => (
          <ListItem key={idx} alignItems="flex-start" divider>
            <Box>
              <Typography variant="subtitle1">
                <Link href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${item.id}`} target="_blank" rel="noopener noreferrer">{item.id}</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary">{item.summary}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 