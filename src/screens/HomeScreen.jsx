// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'


// const HomeScreen = () => {

//       const [currentScreen, setCurrentScreen] = useState('Home');

//   return (
//     <View>
//       <TouchableOpacity style={styles.button}   onPress={() => setCurrentScreen('Content')}><Text style={styles.text}>Help & Support </Text></TouchableOpacity>
//        <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Help')}> <Text>Content Pages</Text></TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
// text:{
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontFamily: 'Poppins-Medium',
// },
// button:{
//        backgroundColor: '#A855F7',
//     marginHorizontal: 20,
//     marginBottom: 30,
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
// }
// })
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = ({ navigation }) => {
  return (
    
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
 <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
              />
      <LinearGradient
         colors={['#e9d5ec66', '#ffffff', '#e6d3fa']}
         start={{ x: 0, y: 1 }}
         end={{ x: 1, y: 0 }}
         style={{
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
         }}
       />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Support')}
      >
        <Text style={styles.text}>Content Pages</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Content')}
      >
        <Text style={styles.text}>Help & Support</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
text:{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
},
button:{
       backgroundColor: '#A855F7',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal:30
}
})