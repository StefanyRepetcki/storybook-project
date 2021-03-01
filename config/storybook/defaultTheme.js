import imgLogo from '../../src/assets/images/Logo.jpg';
import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#ff00cc',
  colorSecondary: '#333399',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#333399',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333399',
  barSelectedColor: 'white',
  barBg: '#ff00cc',

  // Form colors
  inputBg: 'white',
  inputBorder: '#333399',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Desenvolvimento de software',
  brandUrl: '#',
  brandImage: `/${imgLogo}`,
});