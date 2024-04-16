import fs from 'fs/promises';

export default async function getFile(path) {
  let requestedFile;

  try {
    if (path === '/') {
      requestedFile = await fs.readFile('./index.html');
    } else if (path === '/about') {
      requestedFile = await fs.readFile('./about.html');
    } else if (path === '/contact-me') {
      requestedFile = await fs.readFile('./contact-me.html');
    } else {
      requestedFile = await fs.readFile('./404.html');
    }
  } catch (err) {
    console.error(err);
    requestedFile = await fs.readFile('./404.html');
  }

  return requestedFile;
}
