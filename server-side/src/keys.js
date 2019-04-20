"use strict";
import dotEnv from 'dotenv';
dotEnv.config();

const password= process.env.MONGO_PWD;
const user = process.env.MONGO_USER
const Keys = {
  mongo: {
    url: `mongodb+srv://${user}:${password}@webwalterwrite-qslmy.mongodb.net/crud-tuto?retryWrites=true`
  },
  oAuth: {
    twitter: {
      token: process.env.TWITTER_TOKEN,
      secret: process.env.TWITTER_SECRET
    },
    github: {
      token: process.env.GITHUB_TOKEN,
      secret: process.env.GITHUB_SECRET
    },
    google: {
      token: process.env.GOOGLE_TOKEN,
      secret: process.env.GOOGLE_SECRET
    }
  },
  cookie: { key: process.env.COOKIE_SECRET }
};

export default Keys;