import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Search from '../Screen/Search';
import AnimePlayer from '../Screen/AnimePlayer';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentRelease" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Tab.Screen name="Player" component={AnimePlayer} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default BottomTabs