import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/user';
import cookieSession from 'cookie-session';
import passport from 'passport';
import  './src/oauth/oAuth';
import { Keys } from './src/keys';
const { cookie: { key } } = Keys;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cookieSession({
    name: 'user',
    maxAge : 24 * 60 * 1000,
    keys: [key],
}));
// Initialiser passport
app.use(passport.initialize())
app.use(passport.session());



app.use('/api', userRoutes);


export default app;