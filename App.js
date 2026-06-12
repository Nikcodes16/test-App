// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Content from "./src/screens/Content"
// const App = () => {
//   return (
//     <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
// <Content />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Content from './src/screens/Content';
import Support from './src/screens/Support';
import Terms from './src/screens/Terms';
import Privacy from './src/screens/Privacy';
import About from './src/screens/About';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Support" component={Support} />
         <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}