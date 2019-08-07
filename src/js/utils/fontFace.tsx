import { css, FlattenSimpleInterpolation } from 'styled-components';

export interface FontFace {
	fontFamily: string;
	fontStyle: string;
	fontWeight: number;
	woff: string;
	woff2: string;
}

export default function fontFace({
	fontFamily,
	fontStyle,
	fontWeight,
	woff,
	woff2,
}: FontFace): FlattenSimpleInterpolation {
	return css`
		@font-face {
			font-family: ${JSON.stringify(fontFamily)};
			font-style: ${fontStyle};
			font-weight: ${String(fontWeight)};
			src: url(${JSON.stringify(woff2)}) format('woff2'),
				url(${JSON.stringify(woff)}) format('woff');
		}
	`;
}
