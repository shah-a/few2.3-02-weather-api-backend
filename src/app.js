import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/weather', async (req, res) => {
  const { urlBase, urlQuery } = req.body;
  const fetchUrl = urlBase + urlQuery + `&appid=${process.env.API_KEY}`;

  let data = await fetch(fetchUrl);
  data = await data.json();

  return res.json(data);
});

app.listen(process.env.PORT || 3000);
