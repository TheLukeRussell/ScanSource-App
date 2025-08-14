import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import useThemeStore from './src/stores/useThemeStore';
import { lightTheme, darkTheme } from './src/theme/theme';

export default function App() {
  const themeName = useThemeStore((s) => s.theme);
  const paperTheme = themeName === 'dark' ? darkTheme : lightTheme;
  const navTheme = themeName === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <StatusBar barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
