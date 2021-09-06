import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimePlayer from '../Screen/AnimePlayer';
import BottomTabs from './BottomTabs';
import SeeAll from '../Screen/SeeAll';
import AnimeDetail from '../Screen/AnimeDetail';
import SeeAllEp from '../Screen/SeeAllEp';
import GenreAnimeList from '../Screen/GenreAnimeList';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="AnimePlayer" component={AnimePlayer} options={{ headerShown: false }}/>
        <Stack.Screen name="SeeAll" component={SeeAll} options={{ headerShown: false }}/>
        <Stack.Screen name="AnimeDetail" component={AnimeDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="SeeAllEp" component={SeeAllEp} options={{ headerShown: false }}/>
        <Stack.Screen name="GenreAnimeList" component={GenreAnimeList} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

export default StackNavigation;