// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import "../tailwind.css"
import { themes } from '@storybook/theming';
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true
  },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
        color: '#ffffff',
        default: true
      },
      {
        name: 'Dark',
        // The class dark will be added to the body tag
        class: ['dark'],
        color: '#000000'
      }
    ]
  }
};
