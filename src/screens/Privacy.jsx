import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator ,StatusBar} from 'react-native';
import api from '../../api';
import LinearGradient from 'react-native-linear-gradient';
import Vector from '../assets/icons/Vector.svg';
import Line from '../assets/icons/Line.svg';
export default function Privacy({ navigation }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  api.get('/user/static-contents/PRIVACY_POLICY') 
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
      setLoading(false);
    })
    .catch(err => {
      console.log("Privacy API Error:", err);
      setContent("Content not available right now.");
      setLoading(false);
    });
}, []);



  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
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
                       <Text style={styles.title}>Privacy Policy</Text>
                       <View style={styles.emptyView} />
                     </View>
           </View>
      
      {loading ? (
        <ActivityIndicator size="small" color="#9C27B0" style={styles.loader} />
      ) : (
        <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={false}>
          <Text style={styles.contentText}>
            {content || "No content available."}
          </Text>
        </ScrollView>
      )}
      <Line  width="90%"
                    height={3}
                    style={styles.bottomLine}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  
    padding: 20 
},

  scrollBox: { flex: 1 },
  contentText: { 
    fontSize: 14, 
    color: '#666', 
    lineHeight: 22 
},
  loader: { flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' },
//    flexOne: {
//     flex: 1,
//   },
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
 bottomLine: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
},
});
