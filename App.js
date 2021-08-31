import React from 'react'
import BottomTabs from './Navigation/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';


const App = () => {

  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  )
};

export default App;
