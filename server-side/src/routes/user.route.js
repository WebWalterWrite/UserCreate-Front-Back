import router from './config.routes';
import { getuser } from '../controllers/crud';

router.get('/', getuser)  
  

export default router;