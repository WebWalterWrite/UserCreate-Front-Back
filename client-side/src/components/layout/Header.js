import React  from "react";
import { Link } from 'react-router-dom';
// import style
import { Nav } from './layout.styled';

const Header = () => {
	
	return (
		<header>
			<h1><Link to="/">Creation User</Link></h1>
			<Nav>
					<ul>
						<li><Link to="/se-connecter">je me connecte</Link></li>
					</ul>
			</Nav>
		</header>
	);
};

export default Header;
