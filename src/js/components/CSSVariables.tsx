import { css, createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

const styles = css`
	:root {
		/* ----------------------------------------------------------------- */
		/* SPACING */
		/* ----------------------------------------------------------------- */

		--spacingGutter: 22px;
		--spacingGutterHalf: 11px;
		--spacingGutterDouble: 44px;

		@media (max-width: 420px) {
			--spacingGutter: 16px;
			--spacingGutterHalf: 8px;
			--spacingGutterDouble: 32px;
		}

		/* ----------------------------------------------------------------- */
		/* COLORS */
		/* ----------------------------------------------------------------- */

		--colorWhite: white;
		--colorGrey: #888888;
		--colorLightGrey: ${lighten(0.3, '#888888')};
	}
`;

export default createGlobalStyle`${styles}`;
