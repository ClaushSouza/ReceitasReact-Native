import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entrada from './Screens/Entrada';
import Home from './Screens/Home';
import PratoPrincipal from './Screens/PratoPrincipal';
import Sobremesa from './Screens/Sobremesa';
import Vegano from './Screens/Vegano';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vegano" component={Vegano} />
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="PratoPrincipal" component={PratoPrincipal} />
        <Stack.Screen name="Sobremesa" component={Sobremesa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
