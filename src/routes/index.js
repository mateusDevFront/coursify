import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home/index'
import Details from '../pages/Details'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Details}
      />
      
    </Stack.Navigator>
  );
}
export default Routes;