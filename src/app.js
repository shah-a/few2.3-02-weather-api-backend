import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config()

const app = express();

app.post('/', async (req, res) => {
  let data = await fetch(req.body.url + `&appid=${process.env.API_KEY}`);
  data = await data.json();
  return res.json(data);
});

app.listen(process.env.PORT || 3000);
