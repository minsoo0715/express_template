import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const getFile = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/", "test.txt"));
}