#! /usr/bin/env node
import 'dotenv/config';
import express from 'express';
import router from './src/routes/index.js';

const { PORT } = process.env;

const start = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', router);
  app.listen(PORT, () => {
    console.log(`users server listen on port ${PORT}`);
  });
};

export default start;
