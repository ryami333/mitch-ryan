import {
	createGlobalStyle,
	css,
	FlattenSimpleInterpolation,
} from 'styled-components';
import fontFace, { FontFace } from '../utils/fontFace';
import raleway100woff2 from '../fonts/raleway/raleway-v11-latin-100.woff2';
import raleway100woff from '../fonts/raleway/raleway-v11-latin-100.woff';
import raleway100italicwoff2 from '../fonts/raleway/raleway-v11-latin-100italic.woff2';
import raleway100italicwoff from '../fonts/raleway/raleway-v11-latin-100italic.woff';
import raleway200woff2 from '../fonts/raleway/raleway-v11-latin-200.woff2';
import raleway200woff from '../fonts/raleway/raleway-v11-latin-200.woff';
import raleway200italicwoff2 from '../fonts/raleway/raleway-v11-latin-200italic.woff2';
import raleway200italicwoff from '../fonts/raleway/raleway-v11-latin-200italic.woff';
import raleway300woff2 from '../fonts/raleway/raleway-v11-latin-300.woff2';
import raleway300woff from '../fonts/raleway/raleway-v11-latin-300.woff';
import raleway300italicwoff2 from '../fonts/raleway/raleway-v11-latin-300italic.woff2';
import raleway300italicwoff from '../fonts/raleway/raleway-v11-latin-300italic.woff';
import ralewayregularwoff2 from '../fonts/raleway/raleway-v11-latin-regular.woff2';
import ralewayregularwoff from '../fonts/raleway/raleway-v11-latin-regular.woff';
import ralewayitalicwoff2 from '../fonts/raleway/raleway-v11-latin-italic.woff2';
import ralewayitalicwoff from '../fonts/raleway/raleway-v11-latin-italic.woff';
import raleway500woff2 from '../fonts/raleway/raleway-v11-latin-500.woff2';
import raleway500woff from '../fonts/raleway/raleway-v11-latin-500.woff';
import raleway500italicwoff2 from '../fonts/raleway/raleway-v11-latin-500italic.woff2';
import raleway500italicwoff from '../fonts/raleway/raleway-v11-latin-500italic.woff';
import raleway600woff2 from '../fonts/raleway/raleway-v11-latin-600.woff2';
import raleway600woff from '../fonts/raleway/raleway-v11-latin-600.woff';
import raleway600italicwoff2 from '../fonts/raleway/raleway-v11-latin-600italic.woff2';
import raleway600italicwoff from '../fonts/raleway/raleway-v11-latin-600italic.woff';
import raleway700woff2 from '../fonts/raleway/raleway-v11-latin-700.woff2';
import raleway700woff from '../fonts/raleway/raleway-v11-latin-700.woff';
import raleway700italicwoff2 from '../fonts/raleway/raleway-v11-latin-700italic.woff2';
import raleway700italicwoff from '../fonts/raleway/raleway-v11-latin-700italic.woff';
import raleway800woff2 from '../fonts/raleway/raleway-v11-latin-800.woff2';
import raleway800woff from '../fonts/raleway/raleway-v11-latin-800.woff';
import raleway800italicwoff2 from '../fonts/raleway/raleway-v11-latin-800italic.woff2';
import raleway800italicwoff from '../fonts/raleway/raleway-v11-latin-800italic.woff';
import raleway900woff2 from '../fonts/raleway/raleway-v11-latin-900.woff2';
import raleway900woff from '../fonts/raleway/raleway-v11-latin-900.woff';
import raleway900italicwoff2 from '../fonts/raleway/raleway-v11-latin-900italic.woff2';
import raleway900italicwoff from '../fonts/raleway/raleway-v11-latin-900italic.woff';

const fontFaces: FontFace[] = [
	{
		fontFamily: 'Raleway',
		fontWeight: 100,
		fontStyle: 'normal',
		woff: raleway100woff,
		woff2: raleway100woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 100,
		fontStyle: 'italic',
		woff: raleway100italicwoff,
		woff2: raleway100italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 200,
		fontStyle: 'normal',
		woff: raleway200woff,
		woff2: raleway200woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 200,
		fontStyle: 'italic',
		woff: raleway200italicwoff,
		woff2: raleway200italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 300,
		fontStyle: 'normal',
		woff: raleway300woff,
		woff2: raleway300woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 300,
		fontStyle: 'italic',
		woff: raleway300italicwoff,
		woff2: raleway300italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 400,
		fontStyle: 'normal',
		woff: ralewayregularwoff,
		woff2: ralewayregularwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 400,
		fontStyle: 'italic',
		woff: ralewayitalicwoff,
		woff2: ralewayitalicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 500,
		fontStyle: 'normal',
		woff: raleway500woff,
		woff2: raleway500woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 500,
		fontStyle: 'italic',
		woff: raleway500italicwoff,
		woff2: raleway500italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 600,
		fontStyle: 'normal',
		woff: raleway600woff,
		woff2: raleway600woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 600,
		fontStyle: 'italic',
		woff: raleway600italicwoff,
		woff2: raleway600italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 700,
		fontStyle: 'normal',
		woff: raleway700woff,
		woff2: raleway700woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 700,
		fontStyle: 'italic',
		woff: raleway700italicwoff,
		woff2: raleway700italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 800,
		fontStyle: 'normal',
		woff: raleway800woff,
		woff2: raleway800woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 800,
		fontStyle: 'italic',
		woff: raleway800italicwoff,
		woff2: raleway800italicwoff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 900,
		fontStyle: 'normal',
		woff: raleway900woff,
		woff2: raleway900woff2,
	},
	{
		fontFamily: 'Raleway',
		fontWeight: 900,
		fontStyle: 'italic',
		woff: raleway900italicwoff,
		woff2: raleway900italicwoff2,
	},
];

const styles = fontFaces.map(
	(style): FlattenSimpleInterpolation => fontFace(style),
);

export default createGlobalStyle`${styles}`;
