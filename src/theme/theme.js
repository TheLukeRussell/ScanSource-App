import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const brandPrimary = '#f47920';
const brandSecondary = '#d71925';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: brandSecondary,
    secondary: brandPrimary
  }
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: brandSecondary,
    secondary: brandPrimary
  }
};
