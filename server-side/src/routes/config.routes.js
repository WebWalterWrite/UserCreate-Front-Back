import express from 'express';
const router = express.Router();

router.use((req, res, next)=>{

        res.header("Access-Control-Allow-Origin",  req.headers.origin);
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-auth-token");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
});

export default router;