import React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Text, Button, Card } from 'react-native-paper';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Action
          icon="menu"
          accessibilityLabel="Open menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Card>
          <Card.Title title="Welcome 👋" subtitle="Expo • Tabs • Drawer • Paper" />
          <Card.Content>
            <Text>
              This starter ships with a bottom tab bar and a Home-only drawer (hamburger menu).
            </Text>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title title="Quick Links" />
          <Card.Content>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Search')}
              style={{ marginBottom: 8 }}
            >
              Go to Search
            </Button>
            <Button mode="outlined" onPress={() => navigation.navigate('Settings')}>
              Open Settings
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}
