#!/usr/bin/env node

import http from 'http';
import getFile from './getFile.js';
import 'dotenv/config';

const server = http.createServer();

server.on('request', async (req, res) => {
  const requestURL = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (requestURL.includes('css')) {
    res.setHeader('Content-Type', 'text/css');
  }
  if (requestURL.includes('js')) {
    res.setHeader('Content-Type', 'text/js');
  }
  res.end(await getFile(requestURL));
});

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
