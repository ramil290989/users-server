#! /usr/bin/env node
import 'dotenv/config';
import express from 'express';
import router from './src/routes/index.js';

const { PORT } = process.env;

const start = () => {
  const app = express();
  app.use(express.static('images'));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,auth');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', router);
  app.listen(PORT, () => {
    console.log(`users server listen on port ${PORT}`);
  });
};

export default start;
