// import schema mongo
import UserSocialAccount from '../schemas/socialAccount.schema.js';


/**
 * @description - Récupérer les données à partir de l'id compte
 * @param {string} id - Id du profile du réseau social
 */
export const findUserByProfileId = async id => {
    try {
        const result = await UserSocialAccount.findOne({ providerId: id });
        return result;
    } catch (error) {
        console.log(error.code, error.message)
    }
};
/**
 * @description - Enregistrer un nouvel user
 * @param {object} data - données du nouvel user (id, email, photo, etc...)
 */
export const addUser = async data => {
    try {
        const addData = new UserSocialAccount(data);

        await addData.save( err => err && console.log(err.code, err.message));

    } catch (error) {
        console.log(error)
    }  
};