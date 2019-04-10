import dotEnv from 'dotenv';
dotEnv.config();

const password= process.env.MONGO_PWD;
const dbName = process.env.MONGO_DBNAME;
const Keys = {
  mongo: {
    url: `mongodb+srv://webwalterwrite:${password}@webwalterwrite-qslmy.mongodb.net/${dbName}?retryWrites=true`
  },
  oAuth: {
    twitter: {
      token: process.env.TWITTER_TOKEN,
      secret: process.env.TWITTER_SECRET
    }
  },
  cookie: { key: process.env.COOKIE_SECRET }
};

export default Keys;