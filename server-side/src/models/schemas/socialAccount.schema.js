
import mongoose from "../config.db";
const Schema = mongoose.Schema;

const userSocialAccount = new Schema({
  providerId: {
    type: String
  },
  providerName: {
    type: String,
    enum: ["twitter"]
  },
  providerUserName: {
    type: String
  },
  providerUserEmail: {
      type: String,
  },
  providerUserPhoto: {
        type: String
 }
});


const UserSocialAccount = mongoose.model('user_social_account', userSocialAccount, 'user_social_account');

export default UserSocialAccount;