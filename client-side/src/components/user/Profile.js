import React, { useState, useEffect } from 'react'
import { getUser } from '../../utils/api';


const Profile = () => {

    // initialise state
    const [user, setUser ] = useState({});

    // récupérer les données user
    useEffect( () => {
        const getData = async () =>{
            const {data: { user }} = await getUser();
            setUser(user);
        };
        getData();
    },[]);

    console.log(user)
    return(
        <h1>Mon Compte</h1>

    )
};

export default Profile;