// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import Vector from '../assets/icons/Vector.svg';
// import Plus from '../assets/icons/Plus.svg';
// const Content = () => {
//   return (
//     <View style={styles.container}>
//       <View style={{flexDirection: 'row',marginTop:30}}>
//       <TouchableOpacity style={styles.circle}>
//         <Vector width={14} height={8} />
//       </TouchableOpacity>

//       <Text style={styles.title}>Contact Support</Text>
// </View>
//       <Text>A</Text>
//       <Text>A</Text>
//       <Text>A</Text>
       
//        <TouchableOpacity style={styles.circle2}>
//         <Plus width={20} height={20} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Content;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   circle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#F5F2FA',
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },

//   title: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 20,
//     textAlign: 'center',
//     justifyContent:'center',
//     paddingLeft:50,
//     marginTop:5
//   },
//    circle2: {
//     width: 56,
//     height: 56,
//     borderRadius: 50,
//     backgroundColor: '#AB47BC',
//     marginLeft:270,
//     marginTop:370,
//      justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import Vector from '../assets/icons/Vector.svg';
// import Plus from '../assets/icons/Plus.svg';
// import LinearGradient from 'react-native-linear-gradient';

// const data = [
//   {
//     id: 1,
//     title: 'Technical Issue',
//     desc: 'Facing a problem with the app? Report bugs, errors or features that arent working properly.',
//     date: 'Dec 1, 2024',
//     status: 'Closed',
//   },
//   {
//     id: 2,
//     title: 'Account & Access',
//     desc: 'Need help with login, account settings, or access issues? Raise a request here.',
//     date: 'Dec 1, 2024',
//     status: 'Pending',
//   },
//   {
//     id: 3,
//     title: 'General Support',
//     desc: 'Have a question, suggestion, or need assistance? Our support team is here to help.',
//     date: 'Nov 25, 2024',
//     status: 'Open',
//   },
// ];

// const Content = () => {
//   const statusColor = status => {
//     if (status === 'Closed') return '#16A34A';
//     if (status === 'Pending') return '#D97706';
//     if (status === 'Open') return '#2563EB';

//     return '#6B7280';
//   };

//   const statusBgColor = status => {
//     if (status === 'Closed') return '#DCFCE7';
//     if (status === 'Pending') return '#FEF3C7';
//     if (status === 'Open') return '#DBEAFE';

//     return '#F3F4F6';
//   };

//   return (
//     <LinearGradient
//       colors={['#FAF5FF', '#F3E8FF', '#E9D5FF']}
//       style={styles.container}>
//       <SafeAreaView style={{flex: 1}}>
        
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.backBtn}>
//             <Vector width={14} height={8} />
//           </TouchableOpacity>

//           <Text style={styles.title}>Contact Support</Text>

//           <View style={{width: 40}} />
//         </View>

//         {/* Cards */}
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{paddingBottom: 100}}>
//           {data.map(item => (
//             <View key={item.id} style={styles.card}>
              
//               <View style={styles.row}>
//                 <Text style={styles.cardTitle}>
//                   {item.title}
//                 </Text>

//                 <View
//                   style={[
//                     styles.statusBox,
//                     {
//                       backgroundColor: statusBgColor(item.status),
//                     },
//                   ]}>
//                   <Text
//                     style={[
//                       styles.statusText,
//                       {
//                         color: statusColor(item.status),
//                       },
//                     ]}>
//                     {item.status}
//                   </Text>
//                 </View>
//               </View>

//               <Text style={styles.desc}>
//                 {item.desc}
//               </Text>

//               <Text style={styles.date}>
//                 {item.date}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>

//         {/* Floating Button */}
//         <TouchableOpacity style={styles.plusBtn}>
//           <Plus width={20} height={20} />
//         </TouchableOpacity>

//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default Content;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 20,
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
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 20,
//     marginBottom: 15,
//     padding: 15,
//     borderRadius: 15,
//     elevation: 2,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },

//   cardTitle: {
//     flex: 1,
//     fontSize: 16,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//     marginRight: 10,
//   },

//   statusBox: {
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   statusText: {
//     fontSize: 12,
//     fontFamily: 'Poppins-Medium',
//   },

//   desc: {
//     marginTop: 10,
//     color: '#555555',
//     lineHeight: 20,
//     fontFamily: 'Poppins-Regular',
//     fontSize: 13,
//   },

//   date: {
//     marginTop: 12,
//     color: '#999999',
//     fontSize: 12,
//     fontFamily: 'Poppins-Regular',
//   },

//   plusBtn: {
//     position: 'absolute',
//     bottom: 25,
//     right: 25,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#A855F7',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
// });
//------------------------------------------------------------------------
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Vector from '../assets/icons/Vector.svg';
// import Plus from '../assets/icons/Plus.svg';
// import Line from '../assets/icons/Line.svg';
// import LinearGradient from 'react-native-linear-gradient';
// import RaiseTicket from './RaiseTicket';

// const data = [
//   {
//     id: 1,
//     title: 'Technical Issue',
//     desc: 'Facing a problem with the app? Report bugs, errors or features that arent working properly.',
//     date: 'Dec 1, 2024',
//     status: 'Closed',
//   },
//   {
//     id: 2,
//     title: 'Account & Access',
//     desc: 'Need help with login, account settings, or access issues? Raise a request here.',
//     date: 'Dec 1, 2024',
//     status: 'Pending',
//   },
//   {
//     id: 3,
//     title: 'General Support',
//     desc: 'Have a question, suggestion, or need assistance? Our support team is here to help.',
//     date: 'Nov 25, 2024',
//     status: 'Open',
//   },
// ];

// const Content = ({navigation}) => {
//   const [currentScreen, setCurrentScreen] = useState('list');

//   const statusColor = status => {
//     if (status === 'Closed') return '#16A34A';
//     if (status === 'Pending') return '#D97706';
//     if (status === 'Open') return '#2563EB';
//     return '#6B7280';
//   };

//   const statusBgColor = status => {
//     if (status === 'Closed') return '#DCFCE7';
//     if (status === 'Pending') return '#FEF3C7';
//     if (status === 'Open') return '#DBEAFE';
//     return '#F3F4F6';
//   };

//   return (
//     <View style={styles.container}>

     
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />

     
//       <LinearGradient
//         colors={['#C79EF5', '#D9B9FF', '#AB47BC66']}
//         style={StyleSheet.absoluteFillObject}
//       />

//       <SafeAreaView style={styles.safeArea}>
//         {currentScreen === 'list' ? (
//           <View style={{ flex: 1 }}>
//             <View style={styles.header}>
//               <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//                 <Vector width={14} height={8} />
                 
//               </TouchableOpacity>

//               <Text style={styles.title}>Contact Support</Text>

//               <View style={{ width: 40 }} />
//             </View>

//             <ScrollView
//               showsVerticalScrollIndicator={false}
//               contentContainerStyle={{ paddingBottom: 100 }}
//             >
//               {data.map(item => (
//                 <View key={item.id} style={styles.card}>
//                   <View style={styles.row}>
//                     <Text style={styles.cardTitle}>{item.title}</Text>

//                     <View
//                       style={[
//                         styles.statusBox,
//                         { backgroundColor: statusBgColor(item.status) },
//                       ]}
//                     >
//                       <Text
//                         style={[
//                           styles.statusText,
//                           { color: statusColor(item.status) },
//                         ]}
//                       >
//                         {item.status}
//                       </Text>
//                     </View>
//                   </View>

//                   <Text style={styles.desc}>{item.desc}</Text>
//                   <Text style={styles.date}>{item.date}</Text>
//                 </View>
//               ))}
//             </ScrollView>

//             <TouchableOpacity
//               style={styles.plusBtn}
//               onPress={() => setCurrentScreen('raiseTicket')}
//             >
//               <Plus width={20} height={20} />
//             </TouchableOpacity>
//             <Line width={120} height={10} style={styles.bottomIcon} />
//           </View>
//         ) : (
//           <View style={styles.ticketContainer}>
//             <RaiseTicket
//               onBack={() => setCurrentScreen('list')}
//               onSubmitSuccess={() => setCurrentScreen('list')}
//             />
//           </View>
//         )}
//       </SafeAreaView>
//     </View>
//   );
// };

// export default Content;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF5FF',
//   },

//   safeArea: {
//     flex: 1,
//   },

//   ticketContainer: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 70,
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
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 20,
//     marginBottom: 15,
//     padding: 15,
//     borderRadius: 15,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },

//   cardTitle: {
//     flex: 1,
//     fontSize: 15,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//     marginRight: 10,
//   },

//   statusBox: {
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 20,
//   },

//   statusText: {
//     fontSize: 12,
//     fontFamily: 'Poppins-Medium',
//   },

//   desc: {
//     marginTop: 10,
//     color: '#555555',
//     lineHeight: 20,
//     fontFamily: 'Poppins-Regular',
//     fontSize: 13,
//   },

//   date: {
//     marginTop: 12,
//     color: '#999999',
//     fontSize: 12,
//     fontFamily: 'Poppins-Regular',
//   },

//   plusBtn: {
//     position: 'absolute',
//     bottom: 25,
//     right: 25,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#A855F7',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomIcon: {
//   alignSelf: 'center',
//   marginTop: 10,
//   marginBottom: 10,
// },
// });

//------------------------
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Vector from '../assets/icons/Vector.svg';
import Plus from '../assets/icons/Plus.svg';
import LinearGradient from 'react-native-linear-gradient';
import RaiseTicket from './RaiseTicket';
import api from '../../api'; 
import Line from '../assets/icons/Line.svg';
const Content = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState('list');
  const [tickets, setTickets] = useState([]); 
  const [loading, setLoading] = useState(true);

  
  const fetchTickets = () => {
    setLoading(true);
    api.get('/user/support-queries')
      .then(res => {
        
        const ticketList = res.data && res.data.queries ? res.data.queries : [];
        setTickets(ticketList);
        setLoading(false);
      })
      .catch(err => {
        console.log("Fetch Tickets Error:", err);
        setLoading(false);
        const errorMsg = err.response?.data?.message || err.message || "Unknown Network Error";
        alert("API Error: " + errorMsg);
      });
  };



  useEffect(() => {
    fetchTickets();
  }, []);

  
  const statusColor = status => {
    const formattedStatus = String(status).toLowerCase();
    if (formattedStatus === 'closed') return '#16A34A';
    if (formattedStatus === 'pending') return '#D97706';
    if (formattedStatus === 'open') return '#2563EB';
    return '#6B7280';
  };

  
  const statusBgColor = status => {
    const formattedStatus = String(status).toLowerCase();
    if (formattedStatus === 'closed') return '#DCFCE7';
    if (formattedStatus === 'pending') return '#FEF3C7';
    if (formattedStatus === 'open') return '#DBEAFE';
    return '#F3F4F6';
  };

  return (
    <View style={styles.container}>
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
        {currentScreen === 'list' ? (
          <View style={styles.flexOne}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
               <Vector width={18} height={12} />
              </TouchableOpacity>
              <Text style={styles.title}>Contact Support</Text>
              <View style={styles.emptyView} />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#A855F7" style={styles.loader} />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollPadding}
              >
                {tickets.map(item => (
                  <View key={item.id || item._id || Math.random().toString()} style={styles.card}>
                    <View style={styles.row}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <View
                        style={[
                          styles.statusBox,
                          { backgroundColor: statusBgColor(item.status || 'Pending') },
                        ]}
                      >
                        <Text
                          style={[
                            styles.statusText,
                            { color: statusColor(item.status || 'Pending') },
                          ]}
                        >
                          {item.status || 'Pending'}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.desc}>{item.description || item.desc}</Text>
                    <Text style={styles.date}>
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Dec 1, 2024'}
                    </Text>
                  </View>
                ))}

                {tickets.length === 0 && (
                  <Text style={styles.emptyText}>No support tickets found.</Text>
                )}
              </ScrollView>
            )}

            <TouchableOpacity
              style={styles.plusBtn}
              onPress={() => setCurrentScreen('raiseTicket')}
            >
              <Plus width={17} height={20} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ticketContainer}>
            <RaiseTicket
              onBack={() => setCurrentScreen('list')}
              onSubmitSuccess={() => {
                setCurrentScreen('list');
                fetchTickets(); 
              }}
            />
          </View>
        )}
      
      </SafeAreaView>
        <Line  width="90%"
  height={3}
  style={styles.bottomLine}/>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  safeArea: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  ticketContainer: {
    flex: 1,
  },
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
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  title: {
    fontSize: 18,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
  },
  emptyView: {
    width: 40,
  },
  scrollPadding: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    flex: 1,
    fontSize: 15,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    marginRight: 10,
  },
  statusBox: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  desc: {
    marginTop: 10,
    color: '#555555',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  date: {
    marginTop: 12,
    color: '#999999',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  plusBtn: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#AB47BC',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    marginBottom:40
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#A0AEC0',
    marginTop: 40,
    fontFamily: 'Poppins-Regular',
  },
  bottomLine: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center',
},
});
