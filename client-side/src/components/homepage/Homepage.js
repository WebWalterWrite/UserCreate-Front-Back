import React from 'react';
import { Section } from './homepage.styled';
import { getUser } from '../../utils/api';

const Homepage = () => {
getUser();
 return (
    <Section>

        <p>
            Une simple démonstration de connexion avec passport oAuth.
        </p>

    </Section>
 )};


export default Homepage;