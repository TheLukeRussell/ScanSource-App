import React from 'react';
import { View } from 'react-native';
import { Appbar, Avatar, Text, Button, Card } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <View style={{ padding: 16 }}>
        <Card>
          <Card.Content style={{ alignItems: 'center', gap: 12 }}>
            <Avatar.Icon size={72} icon="account" />
            <Text variant="titleMedium">You</Text>
            <Text variant="bodyMedium">Digital Marketing Manager</Text>
            <Button mode="contained" style={{ marginTop: 8 }}>
              Edit Profile
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}
