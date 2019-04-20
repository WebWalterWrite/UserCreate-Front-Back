// import schema mongo
import Users from '../schemas/users.schema.js';


/**
 * @description - Récupérer le user id à partir de l'id compte
 * @param {string} id - Id du profile du réseau social
 */

export const findUserByProviderId = async id => {

     let res = await Users
             .findOne({'social.providerId':id}, 'social.providerId');
    
    if(res){
    const { social:[{providerId}]} = res || {};
    return providerId;
    }
    return false
  
};

/**
 * @description - Récupérer les données à partir de l'id compte
 * @param {string} id - Id du profile du réseau social
 */

export const GetUserByProviderId = async id => {
    try { 
        let res = await Users
                .findOne({'social.providerId':id});
       return res
    } catch (error) {
        console.log('error fn GetUserByProviderId', error.message)
    }
};

export const findUserByEmail = async email => {
    try {
        const result = await Users.findOne({ post: email });
        return result;
    } catch (error) {
        console.log(error.code, error.message)
    }
};

/**
 * @description - Enregistrer un nouvel user
 * @param {object} data - données du nouvel user (id, email, photo, etc...)
 */
export const addUser = async (data) => {
    try {
    
        const addData = new Users(data.user);
        
        addData.social.push(data.social);

        await addData.save( err => err && console.log(err.code, err.message));

    } catch (error) {
        console.log(error)
    }  
};


