import router from './config.routes';
import passport from 'passport';


/**
 * @description - Twitter authentification
 */

router.get('/twitter', passport.authenticate('twitter'));

router.get("/twitter/callback", 
    passport.authenticate( 'twitter', { failureRedirect: "http://localhost:3000/se-connecter"}),
    ( req, res) => res.redirect(`http://localhost:3000/profile/`)
);


/**
 * @description - Github authentification
 */
router.get('/github', passport.authenticate('github'));

router.get('/gihtub/callback', (
    passport.authenticate( 'github', { failureRedirect: "http://localhost:3000/se-connecter"}),
    ( req, res) => res.redirect(`http://localhost:3000/profile/`)
));


/**
 * @description -Google authentification
 */
router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback',(
    passport.authenticate('google',{ failureRedirect: "http://localhost:3000/se-connecter"}),
    ( req, res) => res.redirect(`http://localhost:3000/profile/`) 
));

export default router;


