import 'react-native-gesture-handler';

import * as React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/home'
import MeteorScreen from './screens/meteor'
import ISSLocationScreen from './screens/issLocation'

const Stack = createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "Home" screenOptions={{headerShown: false}}>
      <Stack.Screen
      name = "Home" component = {HomeScreen}> 
      </Stack.Screen>
      <Stack.Screen
      name = "ISSLoaction" component = {ISSLocationScreen}> 
      </Stack.Screen>
      <Stack.Screen
      name = "MeteorLoaction" component = {MeteorScreen}> 
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;