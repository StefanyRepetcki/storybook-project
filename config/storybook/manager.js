import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
    theme: theme,
    sidebarAnimations: true,
    isFullscreen: false,
    showNav: true,
    showPanel: false,
});
