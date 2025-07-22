import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Link, List, ListItem } from '@mui/material';

// Ganti dengan API cyber security news yang tersedia publik, atau gunakan RSS2JSON gratis
const NEWS_API = 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews';

export default function CyberNewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(NEWS_API)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Gagal memuat berita');
        setLoading(false);
      });
  }, []);

  return (
    <Box my={4} mx={'auto'} maxWidth={700}>
      <Typography variant="h4" mb={2} align="center">Cyber Security News Feed</Typography>
      {loading && <Box display="flex" justifyContent="center"><CircularProgress /></Box>}
      {error && <Typography color="error">{error}</Typography>}
      <List>
        {news.slice(0, 7).map((item, idx) => (
          <ListItem key={idx} alignItems="flex-start" divider>
            <Box>
              <Typography variant="h6">
                <Link href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary">{item.pubDate?.slice(0, 16)}</Typography>
              <Typography variant="body1" mt={1} dangerouslySetInnerHTML={{ __html: item.description?.slice(0, 120) + '...' }} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 