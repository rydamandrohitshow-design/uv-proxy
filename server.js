import express from 'express';
import { createBareServer } from '@titaniumnetwork-dev/ultraviolet';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const bare = createBareServer('/bare');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/bare', bare.socketHandler());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Ultraviolet live on ${PORT}`));
