import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity,StatusBar } from 'react-native';
import api from '../../api';
import LinearGradient from 'react-native-linear-gradient';
import Vector from '../assets/icons/Vector.svg';
import Line from '../assets/icons/Line.svg';
export default function Terms({ navigation }) {
  const [content, setContent] = useState('');

useEffect(() => {
  api.get('/user/static-contents/TERMS_AND_CONDITIONS') 
    .then(res => {
      if (res.data && res.data.content && res.data.content.content) {
        const rawHtml = res.data.content.content;
       
        const cleanText = rawHtml
          .replace(/<[^>]*>/g, '') 
          .replace(/&amp;/g, '&');
        setContent(cleanText);
      } else {
        setContent("No content found.");
      }
    })
    .catch(err => {
      console.log("Terms API Error:", err);
      setContent("Content not available right now.");
    });
}, []);



  return (
    <SafeAreaView style={styles.container}>
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
      {/* Back Button */}
    <View style={styles.flexOne}>
                <View style={styles.header}>
                  <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                     <Vector width={18} height={12} />
                  </TouchableOpacity>
                  <Text style={styles.title}>Terms & Conditions</Text>
                  <View style={styles.emptyView} />
                </View>
      </View>
      <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={false}>
        <Text style={styles.contentText}>
          {content || "Loading Content..."}
        </Text>
      </ScrollView>
      <Line  width="90%"
        height={3}
        style={styles.bottomLine}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  { flex: 1,
     backgroundColor: '#F9F5FD', 
     padding: 20 
    },


  scrollBox: { flex: 1},
  contentText: { fontSize: 14, 
    color: '#666', 
    lineHeight: 22 },
  //   flexOne: {
  //   flex: 1,
  // },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
    marginBottom: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  title: {
    fontSize: 20,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
  },
  // emptyView: {
  //   width: 40,
  // },
   bottomLine: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
},
});




//-----------------------------------
// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
// import api from '../../api';
// import LinearGradient from 'react-native-linear-gradient';
// import Vector from '../assets/icons/Vector.svg';
// import Line from '../assets/icons/Line.svg';

// export default function Terms({ navigation }) {
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     api.get('/user/static-contents/TERMS_AND_CONDITIONS') 
//       .then(res => {
//         if (res.data && res.data.content && res.data.content.content) {
          
//           const rawHtml = res.data.content.content;
//           setContent(rawHtml);
//         } else {
//           setContent("No content found.");
//         }
//       })
//       .catch(err => {
//         console.log("Terms API Error:", err);
//         setContent("Content not available right now.");
//       });
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />
        
//       <LinearGradient
//         colors={['#e9d5ec66', '#ffffff', '#e6d3fa']}
//         start={{ x: 0, y: 1 }}
//         end={{ x: 1, y: 0 }}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />

//      
//       <View style={styles.flexOne}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//             <Vector width={14} height={8} />
//           </TouchableOpacity>
//           <Text style={styles.title}>Terms & Conditions</Text>
//           <View style={styles.emptyView} />
//         </View>
//       </View>

//       <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={false}>
//         <Text style={styles.contentText}>
//           {content || "Loading Content..."}
//         </Text>
//       </ScrollView>

//       <Line  
//         width="90%"
//         height={3}
//         style={styles.bottomLine}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     backgroundColor: '#F9F5FD', 
//     padding: 20 
//   },
//   scrollBox: { 
//     flex: 1
//   },
//   contentText: { 
//     fontSize: 14, 
//     color: '#666', 
//     lineHeight: 22 
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 50,
//     marginBottom: 20,
//   },
//   backBtn: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   title: {
//     fontSize: 17,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//   },
//   bottomLine: {
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//   },
// });
