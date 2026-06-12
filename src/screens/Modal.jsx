import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Done from '../assets/icons/Done.svg';

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      
      <View style={styles.modalOverlay}>
        
        <View style={styles.modalContent}>
          
          <View style={styles.checkCircle}>
            <Done height={100} width={100} />
          </View>

          <Text style={styles.modalTitle}>
            Ticket Raised Successfully
          </Text>

          <Text style={styles.modalSubTitle}>
            Your ticket has been submitted successfully
          </Text>

          <TouchableOpacity style={styles.doneBtn} onPress={onClose}>
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>

        </View>

      </View>

    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '82%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 25,
    alignItems: 'center',
  },

  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A855F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 18,
    color: '#111111',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    textAlign: 'center',
  },

  modalSubTitle: {
    fontSize: 13,
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 25,
  },

  doneBtn: {
    backgroundColor: '#A855F7',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },

  doneBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});