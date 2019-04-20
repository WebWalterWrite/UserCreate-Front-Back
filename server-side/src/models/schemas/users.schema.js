import mongoose from '../config.db';

const Schema = mongoose.Schema;

const Social = new Schema({
    providerId:{
        type: String,
        required: true
    },
    providerName: {
        type: String,
        required:true,
        enum: ["twitter","facebook","instagram","github"]
    },
    providerUserName: {
        type: String,
        required: true
    }
});

const users = new Schema ({
    firstname: {
        type: String,
        default:"",
    },
    lastname: {
        type: String,
        default:""
    },
    email: {
        type: String,
        required:true
    },
    photo: {
        type: String,
        default: ''
    },
    social: [Social],
    isActive: {
       type: Boolean,
       default: false 
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

const Users = mongoose.model('users', users, 'users');

export default Users;
