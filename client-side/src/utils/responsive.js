import { css } from "styled-components/macro";



const sizes = {
	LargeDesktop: 2500,
	desktop: 1400,
	tablet: 768,
	phone: 576
};			
	

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export default media;
