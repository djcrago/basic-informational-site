#!/usr/bin/env node

import http from 'http';
import getFile from './getFile.js';

const server = http.createServer();

server.on('request', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(await getFile(req.url));
});

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
