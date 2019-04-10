import router from './config.routes';
import { createUser } from '../controllers/crud';
import passport from 'passport';


router.get('/', (req, res) => {
  req.user && res.json({user :req.user})
})  
  
/**
 * @description - Twitter authentification
 */
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
  "/auth/twitter/callback", passport.authenticate("twitter", {
    failureRedirect: "http://localhost:3000/se-connecter"
  }), (req, res) => {
    // Successful authentication, redirect profile.
    res.redirect(
      `http://localhost:3000/profile/${req.user.providerUserName}`
    );
  }
);

router.get('/createUser', createUser );
export default router;