import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/drawer/NotificationsScreen';
import BookmarksScreen from '../screens/drawer/BookmarksScreen';
import HelpScreen from '../screens/drawer/HelpScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/** Drawer only used inside the Home tab */
function HomeWithDrawer() {
  return (
    <Drawer.Navigator
      id="HomeDrawer"
      screenOptions={{
        headerShown: false,
        drawerType: 'front'
      }}
    >
      <Drawer.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          title: 'Home'
        }}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#d71925',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          const map = {
            Home: 'home-variant',
            Search: 'magnify',
            Messages: 'message-text',
            Profile: 'account-circle',
            Settings: 'cog'
          };
          return (
            <MaterialCommunityIcons name={map[route.name] || 'circle'} size={size} color={color} />
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeWithDrawer} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
