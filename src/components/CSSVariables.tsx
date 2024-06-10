import { css, createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

const styles = css`
    :root {
        /* ----------------------------------------------------------------- */
        /* SPACING */
        /* ----------------------------------------------------------------- */

        --spacing1: 11px;
        --spacing2: 22px;
        --spacing3: 44px;

        @media (max-width: 420px) {
            --spacing1: 8px;
            --spacing2: 16px;
            --spacing3: 32px;
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
