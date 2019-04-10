import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';


// import style
import { Contain } from './form.styled';

const SignIn = () => {

	return (
		<Contain>
			<div>
				<a href="#">
				<FontAwesomeIcon icon={faGithub} size="2x" />
				<span>Github</span>
				</a>
			</div>
			<div>
				<a href="#">
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
		</Contain>
	);
};

export default SignIn;