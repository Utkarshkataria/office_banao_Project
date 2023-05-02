import {View, Text, ImageComponent, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import GroupsScreen from './GroupsScreen';

const Tab = createBottomTabNavigator();
const getGroupImage = ({focused}) => (
  <Image
    source={require('../app/assets/groupIcon.png')}
    style={{height: 23, width: 23}}
  />
);

const getHomeImage = ({focused}) => (
  <Image
    source={require('../app/assets/groupIcon.png')}
    style={{height: 23, width: 23}}
  />
);

const getSettingImage = ({focused}) => (
  <Image
    source={require('../app/assets/groupIcon.png')}
    style={{height: 23, width: 23}}
  />
);
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: '#5417D7',
        tabBarActiveBackgroundColor: '#5417D7',
        tabBarInactiveBackgroundColor: '#5417D7',
        headerShown: false,
        tabBarIcon: GroupsScreen,
      }}>
      <Tab.Screen
        name="Group"
        options={{
          tabBarIcon: getGroupImage,
        }}
        component={GroupsScreen}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: getHomeImage,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: getSettingImage,
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
export default function TabsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <MyTabs />
    </View>
  );
}
