import keys from "../keys";
import {
  addUser,
  findUserByProfileId
} from "../models/Queries/socialAccount.queries.js";
import passport from "passport";
import Twitter from "passport-twitter";
const {
  oAuth: {
    twitter: { token, secret }
  }
} = keys;

const TwitterStrategy = Twitter.Strategy;

passport.serializeUser(async (user, done) => {
  try {
    await done(null, user);
  } catch (error) {
    console.log(error);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await findUserByProfileId(id);
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
      consumerKey: token,
      consumerSecret: secret,
      includeEmail: true,
      callbackURL: "http://localhost:4000/api/auth/twitter/callback"
    },
    async (token, tokenSecret, profile, done) => {
      try {
       
        let { id, provider, displayName, emails:[{value: mail}], photos:[ {value: photo}] } = profile;
      
        let user = {
          providerId: id,
          providerName: provider,
          providerUserName: displayName,
          providerUserEmail: mail,
          providerUserPhoto: photo
        };

        const ifUser = await findUserByProfileId(user.providerId);

        ifUser ? done(null, ifUser.providerId) : await addUser(user);
      } catch (error) {
        console.log(error.message);
      }
    }
  )
);
