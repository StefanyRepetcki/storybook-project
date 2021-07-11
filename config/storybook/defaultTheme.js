import imgLogo from '../../src/assets/images/Logo.png';
import { create } from '@storybook/theming';

const background = 'rgb(224,100,212)';
const backgroundlinear = 'linear-gradient(0deg, rgba(224,100,212,1) 0%, rgba(106,36,130,1) 100%)';
const colorPrimary = '#792C8D';
const colorSecondary = '#250D31';

export default create({
	base: 'light',

	colorPrimary: colorPrimary,
	colorSecondary: colorSecondary,
	// UI
	appBg: backgroundlinear,
	appContentBg: colorSecondary,
	appBorderColor: colorSecondary,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'white',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: colorSecondary,
	barSelectedColor: 'white',
	barBg: colorPrimary,

	// Form colors
	inputBg: 'white',
	inputBorder: colorSecondary,
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'Desenvolvimento de Software',
	brandUrl: '#',
	brandImage: `/${imgLogo}`
});
