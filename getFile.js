import fs from 'fs/promises';

export default async function getFile(path) {
  let requestedFile;

  try {
    if (path === '/') {
      requestedFile = await fs.readFile('./index.html');
    }
  } catch (err) {
    console.error(err);
  }

  return requestedFile;
}
