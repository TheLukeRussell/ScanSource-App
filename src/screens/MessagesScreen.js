import React from 'react';
import { View } from 'react-native';
import { Appbar, List } from 'react-native-paper';

const conversations = [
  { id: '1', name: 'Support', last: 'How can we help?' },
  { id: '2', name: 'Taylor', last: 'See you soon!' }
];

export default function MessagesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Content title="Messages" />
      </Appbar.Header>
      <List.Section>
        {conversations.map((c) => (
          <List.Item
            key={c.id}
            title={c.name}
            description={c.last}
            left={(props) => <List.Icon {...props} icon="chat" />}
          />
        ))}
      </List.Section>
    </View>
  );
}
