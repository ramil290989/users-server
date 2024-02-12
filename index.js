#! /usr/bin/env node
import 'dotenv/config';
import express from 'express';

const { PORT } = process.env;

const start = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`users server listen on port ${PORT}`);
  });
};

export default start;
