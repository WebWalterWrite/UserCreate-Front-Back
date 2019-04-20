import styled from "styled-components";

export const Nav = styled.nav`
	color: #ffffff;
	width: 100%;
	ul {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 0.3em;
		li {
			list-style: none;
			margin: 3px;
			letter-spacing: 3px;
            a{
                text-decoration:none;
                color:#FFFFFF;
            }
		}
		li:nth-child(even) {
			::before {
				content: "";
				display: block;
				height: 2px;
			}
		}
		li:first-child,
		li:last-child {
			::before {
				content: "";
				display: block;
				width: 0;
				height: 2px;
				background: #1EA1F1;
				transition: width 0.3s;
			}
			:hover {
				cursor: pointer;
				::before {
					width: 100%;
				}
			}
		}
	}
`;
