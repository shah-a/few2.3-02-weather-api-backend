import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, '..', 'build')));

app.post('/weather', async (req, res) => {
  const { urlBase, urlQuery } = req.body;
  const fetchUrl = urlBase + urlQuery + `&appid=${process.env.API_KEY}`;

  let data = await fetch(fetchUrl);
  data = await data.json();

  return res.json(data);
});

app.listen(process.env.PORT || 3000);
