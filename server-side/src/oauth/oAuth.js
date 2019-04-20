'use strict';

import { addUser, findUserByProviderId, GetUserByProviderId } from "../models/Queries/users.queries.js";
import passport from "passport";
import { Strategy as TwitterStrategy } from "passport-twitter";
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import keys from "../keys";

const { oAuth: { github, google, twitter } } = keys;

passport.serializeUser(async (user, done) => {
  try {
    await done(null, user);
  } catch (error) {
    console.log(error);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await GetUserByProviderId(id);
    return done(null, res);
  } catch (error) {
    console.log(error);
  }
});

/**
 * @description - Se connecter avec Twitter
 */
passport.use(
  new TwitterStrategy(
    {
      consumerKey: twitter.token,
      consumerSecret: twitter.secret,
      includeEmail: true,
      callbackURL: "http://localhost:4000/api/auth/twitter/callback"
    },
    async (token, tokenSecret, profile, done) => {
      try {

        console.log(profile)
        let { id, provider, displayName, emails: [{ value: mail }], photos: [{ value: photo }] } = profile;

        let data = {
          social: {
            providerId: id,
            providerName: provider,
            providerUserName: displayName
          },
          user: {
            email: mail,
            photo: photo
          }
        };

        const ifUser = await findUserByProviderId(id);

        ifUser ? done(null, id) : await addUser(data);
      } catch (error) {
        console.log('error fn passeport twitter: ', error);
      }
    }
  )
);


/**
 * @description - Connexion à Github
*/

passport.use(new GithubStrategy({
  clientID: github.token,
  clientSecret: github.secret,
  callbackURL: "http://127.0.0.1:4000/api/auth/github/callback"
},
  async (token, tokenSecret, profile, done) => {
    try {

      console.log(profile)
      let { id, provider, displayName, emails: [{ value: mail }], photos: [{ value: photo }] } = profile;

      let data = {
        social: {
          providerId: id,
          providerName: provider,
          providerUserName: displayName
        },
        user: {
          email: mail,
          photo: photo
        }
      };

      const [{ providerId }] = await findUserByProfileId(id);

      providerId ? done(null, providerId) : await addUser(data);
    } catch (error) {
      console.log('error fn passeport github: ', error);
    }
  }));

/**
 * @description - Connexion à Google
*/
passport.use(new GoogleStrategy({
  clientID: google.token,
  clientSecret: google.secret,
  callbackURL: 'http://localhost:4000/api/auth/google/callback',
  profileFields: ['id', 'emails', 'displayName']
},
  async (accessToken, refreshToken, profile, done) => {
    try {
   
      let { id, provider, displayName, emails: [{ value: mail }], photos: [{ value: photo }] } = profile;

      let data = {
        social: {
          providerId: id,
          providerName: provider,
          providerUserName: displayName
        },
        user: {
          email: mail,
          photo: photo
        }
      };

      const [{ providerId }] = await findUserByProfileId(id);

      providerId ? done(null, providerId) : await addUser(data);
    } catch (error) {
      console.log(error.message);
    }
  }
));