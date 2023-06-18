import {writeFile} from 'node:fs/promises'

const create = async () => {
  try {
    await writeFile('files/fresh.txt', 'I am fresh and young', {flag: "wx"})
  }
  catch (error) {
    console.error('FS operation failed')
  }
};

await create();
