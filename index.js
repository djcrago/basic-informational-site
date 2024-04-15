import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Testing basic request-response loop');
});

server.listen(8080, () => {
  console.log(`listening on port 8080`);
});
