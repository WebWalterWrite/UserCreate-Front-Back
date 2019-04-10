import axios from 'axios';

/**
 * @desc - Vérifier et récupérer une session active.
 */
export const getUser = async () => 
          await axios.get("http://localhost:4000/api/", {
           withCredentials: true
         });

