// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import Vector from '../assets/icons/Vector.svg';
// import SuccessModal from './Modal'; // Aapki 'Modal.js' file ko import kiya

// const RaiseTicket = ({ onBack, onSubmitSuccess }) => {
//   const [reportTitle, setReportTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = () => {
//     if (reportTitle.trim() === '' || description.trim() === '') {
//       alert('Please fill all fields');
//       return;
//     }
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     onSubmitSuccess(); 
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backBtn} onPress={onBack}>
//           <Vector width={14} height={8} />
//         </TouchableOpacity>

//         <Text style={styles.title}>Raise a Ticket</Text>

//         <View style={{ width: 40 }} />
//       </View>

//       {/* Form Inputs */}
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Reports Title <Text style={{color:'red'}}>*</Text></Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter a short title for your concern"
//           placeholderTextColor="#A0AEC0"
//           value={reportTitle}
//           onChangeText={setReportTitle}
//         />

//         <Text style={styles.label}>Write Description <Text style={{color:'red'}}>*</Text></Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Enter detailed information or description"
//           placeholderTextColor="#A0AEC0"
//           multiline={true}
//           numberOfLines={5}
//           textAlignVertical="top"
//           value={description}
//           onChangeText={setDescription}
//         />
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//         <Text style={styles.submitBtnText}>Submit</Text>
//       </TouchableOpacity>

//       {/* Success Popup */}
//       <SuccessModal visible={showModal} onClose={handleModalClose} />
//     </View>
//   );
// };

// export default RaiseTicket;

// const styles = StyleSheet.create({
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
//     elevation: 2,
//   },
//   title: {
//     fontSize: 17,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//   },
//   formContainer: {
//     paddingHorizontal: 20,
//     flex: 1,
//   },
//   label: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'Poppins-Medium',
//     marginBottom: 8,
//     marginTop: 15,
//   },
//   input: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     paddingVertical: 14,
//     fontSize: 14,
//     color: '#111111',
//     fontFamily: 'Poppins-Regular',
//     elevation: 1,
//   },
//   textArea: {
//     height: 130,
//   },
//   submitBtn: {
//     backgroundColor: '#A855F7',
//     marginHorizontal: 20,
//     marginBottom: 30,
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   submitBtnText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontFamily: 'Poppins-Medium',
//   },
// });
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import Vector from '../assets/icons/Vector.svg';
// import SuccessModal from './Modal';

// const RaiseTicket = ({ onBack, onSubmitSuccess }) => {
//   const [reportTitle, setReportTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = () => {
//     if (reportTitle.trim() === '' || description.trim() === '') {
//       alert('Please fill all fields');
//       return;
//     }
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     onSubmitSuccess();
//   };

//   return (
//     <View style={{ flex: 1 }}>

  
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//       />

     
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backBtn} onPress={onBack}>
//           <Vector width={14} height={8} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Raise a Ticket</Text>
//         <View style={{ width: 40 }} />
//       </View>

    
//       <ScrollView
//         contentContainerStyle={[
//           styles.scrollContainer,
//           { paddingBottom: 120 },
//         ]}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <Text style={styles.label}>
//           Reports Title <Text style={{ color: 'red' }}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter a short title for your concern"
//           placeholderTextColor="#A0AEC0"
//           value={reportTitle}
//           onChangeText={setReportTitle}
//         />

//         <Text style={styles.label}>
//           Write Description <Text style={{ color: 'red' }}>*</Text>
//         </Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Enter detailed information or description"
//           placeholderTextColor="#A0AEC0"
//           multiline={true}
//           numberOfLines={5}
//           textAlignVertical="top"
//           value={description}
//           onChangeText={setDescription}
//         />
//       </ScrollView>

     
//       <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//         <Text style={styles.submitBtnText}>Submit</Text>
//       </TouchableOpacity>

      
//       <SuccessModal visible={showModal} onClose={handleModalClose} />
//     </View>
//   );
// };

// export default RaiseTicket;

// const styles = StyleSheet.create({
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
//     elevation: 2,
//   },

//   title: {
//     fontSize: 17,
//     color: '#111111',
//     fontFamily: 'Poppins-Medium',
//   },

//   scrollContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },

//   label: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'Poppins-Medium',
//     marginBottom: 8,
//     marginTop: 15,
//   },

//   input: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     paddingVertical: 14,
//     fontSize: 14,
//     color: '#111111',
//     fontFamily: 'Poppins-Regular',
//     elevation: 1,
//   },

//   textArea: {
//     height: 130,
//   },

//   submitBtn: {
//     backgroundColor: '#A855F7',
//     marginHorizontal: 20,
//     marginBottom: 30,
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },

//   submitBtnText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontFamily: 'Poppins-Medium',
//   },
// });
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator, 
} from 'react-native';
import Vector from '../assets/icons/Vector.svg';
import SuccessModal from './Modal';
import api from '../../api';
import LinearGradient from 'react-native-linear-gradient';

const RaiseTicket = ({ onBack, onSubmitSuccess }) => {
  const [reportTitle, setReportTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); 


  const isFormValid = reportTitle.trim() !== '' && description.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid) return;

    setLoading(true);

 
    api.post('/user/support-queries', {
      title: reportTitle,
      description: description,
    })
    .then((response) => {
      setLoading(false);
      setShowModal(true); 
    })
    .catch((error) => {
      setLoading(false);
      console.log('Error raising ticket:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  const handleModalClose = () => {
    setShowModal(false);

    setReportTitle('');
    setDescription('');
    onSubmitSuccess();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F9F5FD' }}>
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
  
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Vector width={18} height={12} />
        </TouchableOpacity>
        <Text style={styles.title}>Raise a Ticket</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingBottom: 120 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>
          Reports Title <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a short title for your concern"
          placeholderTextColor="#A0AEC0"
          value={reportTitle}
          onChangeText={setReportTitle}
        />

        <Text style={styles.label}>
          Write Description <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter detailed information or description"
          placeholderTextColor="#A0AEC0"
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </ScrollView>

      <TouchableOpacity 
         style={[
    styles.submitBtn,
    (!isFormValid || loading) && styles.disabledBtn
  ]}
  onPress={handleSubmit}
  disabled={!isFormValid || loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text style={styles.submitBtnText}>Submit</Text>
        )}
      </TouchableOpacity>

     
      <SuccessModal visible={showModal} onClose={handleModalClose} />
    </View>
  );
};

export default RaiseTicket;

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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  title: {
    fontSize: 18,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  label: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    marginTop: 15,
    fontWeight:500
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 14,
    color: '#111111',
    fontFamily: 'Poppins-Regular',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },

  textArea: {
    height: 130,
  },

  submitBtn: {
    position: 'absolute', 
    bottom: 40,
    left: 20,
    right: 20,
    paddingVertical: 12,
    borderRadius: 80,
    alignItems: 'center',
    elevation: 2,
    backgroundColor:"#AB47BC"
  },

  submitBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color:'white'
  },
  disabledBtn: {
  backgroundColor: "#C4B5FD", 
  opacity: 0.7
},
});
