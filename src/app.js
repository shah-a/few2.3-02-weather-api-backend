import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, '..', 'build')));

app.get('/weather', async (req, res) => {
  const { code, units } = req.query;

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const urlQuery = `?appid=${process.env.API_KEY}&zip=${code}&units=${units}`;

  let data = await fetch(urlBase + urlQuery);
  data = await data.json();

  return res.json(data);
});

app.listen(process.env.PORT || 3000);
