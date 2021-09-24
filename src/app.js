import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/weather', (req, res) => {
  const { urlBase, urlQuery } = req.body;
  const fetchUrl = urlBase + urlQuery + `&appid=${process.env.API_KEY}`;
  fetch(fetchUrl)
    .then((data) => data.json())
    .then((data) => res.json(data))
    .catch(() => res.sendStatus(500));
});

app.listen(process.env.PORT || 3000);
