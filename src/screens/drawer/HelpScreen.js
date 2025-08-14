import React from 'react';
import { View } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HelpScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Help" />
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      </Appbar.Header>
      <List.Section>
        <List.Item title="FAQ" description="This is a starter template." />
      </List.Section>
    </View>
  );
}
