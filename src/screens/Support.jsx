import { StyleSheet, Text, View ,StatusBar,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Vector from '../assets/icons/Vector.svg';
import Note from '../assets/icons/Note.svg';
import Guard from '../assets/icons/Guard.svg';
import Group from '../assets/icons/Group.svg';
import Arrow from '../assets/icons/Arrow.svg';
import Line from '../assets/icons/Line.svg';
const Support = ({navigation}) => {
  return (
    <View style={{flex:1}}>
     
      
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
           
            <SafeAreaView style={styles.safeArea}>
                   
                 
                        <View style={styles.header}>
                            
                          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                            <Vector width={18} height={12} />
                             
                          </TouchableOpacity>
             
                          <Text style={styles.title}>Content Pages</Text>
            
                          <View style={{ width: 40 }} />
                        
                        </View>
            
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Terms')}>
                            <Note width={20} height={20} />
                            <Text style={styles.text}>Terms & Conditions</Text>
                            <Arrow width={18} height={20} />
                             
                          </TouchableOpacity>
                           <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Privacy')}>
                            <Guard width={20} height={20} />
                            <Text style={styles.text}>Privacy Policy</Text>
                          <Arrow width={18} height={20} />
                             
                          </TouchableOpacity>
                           <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('About')}>
                            <Group width={20} height={20} />
                            <Text style={styles.text}>About Us</Text>
                           <Arrow width={18} height={20}/>
                             
                          </TouchableOpacity>
                         <Line  width="90%"
                                            height={3}
                                            style={styles.bottomLine}/>
                        
                        </SafeAreaView>
                        
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
     header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 90,
    marginBottom: 20,
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    
  },
 card:{
     backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:20,
    marginBottom: 12,
    marginTop:10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
   marginRight:20
 },
 text:{
    fontFamily:"Poppins-Medium",
    fontSize:15,
    marginLeft:10,
    flex:1,
    fontWeight:500
 },
 bottomLine: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
},
safeArea:{
  flex:1
}
})

// import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';
// import Vector from '../assets/icons/Vector.svg';
// import Note from '../assets/icons/Note.svg';
// import Guard from '../assets/icons/Guard.svg';
// import Group from '../assets/icons/Group.svg';
// import Arrow from '../assets/icons/Arrow.svg';
// import Line from '../assets/icons/Line.svg';

// const Support = ({ navigation }) => {
//   return (
//     // SafeAreaView ko base container banayein taaki status bar properly handle ho
//     <SafeAreaView style={styles.safeArea}>
      
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />

//             {/* Fixed Smooth Linear Gradient System */}
//             {/* Triangle Gradient System: Top-Left to Right-Middle */}
//       <View style={StyleSheet.absoluteFillObject}>
        
//         {/* Base Background: Yeh bottom area ko handle karega */}
//         <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#FFFFFF' }]} />

//         {/* Diagonal Triangle Component */}
//         <LinearGradient
//           // Isse top-left rich purple se right-middle soft tone banegi
//           colors={['#D9B9FF', '#EAD6FF', 'rgba(245, 238, 255, 0.3)', 'transparent']}
          
//           // Locations ko paas rakhne se sharp diagonal / triangle cut banta hai
//           locations={[0, 0.45, 0.65, 0.7]}
          
//           // Direction: Top-Left (0,0) se lekar Right-Middle (1, 0.6) tak
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0.6 }}
//           style={StyleSheet.absoluteFillObject}
//         />
        
//         {/* Optional: Top-Left corner ko aur dark karne ke liye chota shadow cut */}
//         <LinearGradient
//           colors={['rgba(171, 71, 188, 0.25)', 'transparent']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0.5, y: 0.5 }}
//           style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%' }}
//         />

//       </View>

//       {/* Content Container */}
//       <View style={styles.contentContainer}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//             <Vector width={14} height={8} />
//           </TouchableOpacity>

//           <Text style={styles.title}>Content Pages</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Terms')}>
//           <Note width={20} height={20} />
//           <Text style={styles.text}>Terms & Conditions</Text>
//           <Arrow width={20} height={18} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Privacy')}>
//           <Guard width={20} height={20} />
//           <Text style={styles.text}>Privacy Policy</Text>
//           <Arrow width={20} height={18} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('About')}>
//           <Group width={20} height={20} />
//           <Text style={styles.text}>About Us</Text>
//           <Arrow width={20} height={18} />
//         </TouchableOpacity>

//         <Line 
//           width="90%"
//           height={3}
//           style={styles.bottomLine}
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Support

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Fallback color ko main wrapper par lagaya
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 70, // Margin kam kiya kyunki SafeAreaView ab top par hai
//     marginBottom: 20,
//   },
//   backBtn: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 17,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 14,
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginBottom: 12,
//     marginTop: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//     elevation: 3,
//   },
//   text: {
//     fontFamily: "Poppins-Medium", 
//     fontSize: 16,
//     marginLeft: 10,
//     flex: 1,
//     color: '#111111',
//   },
//   bottomLine: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//   }
// })
