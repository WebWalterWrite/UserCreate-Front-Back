import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import style
import { Nav } from './layout.styled';

const Header = () => {
	const [user, setUser] = useState([]);

	return (
		<header>
			<h1><Link to="/">Oauth Demo</Link></h1>
			<Nav>
					<ul>
						<li><Link to="/se-connecter">je me connecte</Link></li>
					</ul>
			</Nav>
			{/* logo site */}
		</header>
	);
};

export default Header;
