import { css, createGlobalStyle } from 'styled-components';

const styles = css`
	html,
	body {
		padding: 0;
		margin: 0;
	}

	body {
		color: var(--colorGrey);
		font-family: 'Raleway';
	}
`;

export default createGlobalStyle`${styles}`;
