import { create } from '@storybook/theming';
import imgLogo from '../../src/assets/images/Logo.png';

export default create({
  base: 'light',

  colorPrimary: '#331B13',
  colorSecondary: '#F8D7C4',

  // UI
  appBg: 'black',
  appContentBg: 'white',
  appBorderColor: '#F8D7C4',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#F8D7C4',
  barSelectedColor: 'black',
  barBg: '#331B13',

  // Form colors
  inputBg: 'white',
  inputBorder: '#F8D7C4',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Desenvolvimento de software',
  brandUrl: '#',
  brandImage: imgLogo,
});