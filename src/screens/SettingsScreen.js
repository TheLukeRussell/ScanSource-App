import React from 'react';
import { View } from 'react-native';
import { Appbar, List, Switch } from 'react-native-paper';
import useThemeStore from '../../src/stores/useThemeStore';

export default function SettingsScreen() {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <List.Section>
        <List.Item
          title="Dark Mode"
          right={() => <Switch value={theme === 'dark'} onValueChange={toggleTheme} />}
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        />
        <List.Item
          title="Notifications"
          description="Example setting"
          left={(props) => <List.Icon {...props} icon="bell-outline" />}
        />
        <List.Item
          title="About"
          description="Tabbed + Drawer starter"
          left={(props) => <List.Icon {...props} icon="information-outline" />}
        />
      </List.Section>
    </View>
  );
}
