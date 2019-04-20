import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

// import component
import {Validate, Email, Password } from '../common/Input';
// import style
/** @component */
import { Contain, Form, Social, Separator } from './form.styled';

const SignIn = () => {
	
	return (
		<Contain>
			<Social>
			<div>
				<a href="http://127.0.0.1:4000/api/auth/github">
				<FontAwesomeIcon icon={faGithub} size="2x" />
				<span>Github</span>
				</a>	
			</div>
			<div>
				<a href="http://localhost:4000/api/auth/google">
				<FontAwesomeIcon icon={faGoogle} size="2x" />
				<span>Google</span>
				</a>
			</div>
			<div>
				<a href="http://localhost:4000/api/auth/twitter">
				<FontAwesomeIcon icon={faTwitter} size="2x" />
				<span>Twitter</span>
				</a>
			</div>
			</Social>
			<Separator>
			<span>OU</span>
			</Separator>
			<Form>
				<Email />
				<Password data="current-password"/>
				<Validate value='se connecter'/>
			</Form>
		</Contain>
	);
};

export default SignIn;