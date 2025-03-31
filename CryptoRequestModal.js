// src/components/CryptoRequestModal.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../utils/theme';

const CryptoRequestModal = ({ visible, onClose, onAccept, onDecline, amount, cryptoAmount, cryptoType }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Request</Text>
          
          <View style={styles.cryptoIconContainer}>
            <View style={styles.cryptoIcon}>
              <Text style={styles.cryptoIconText}>₿</Text>
            </View>
          </View>
          
          <Text style={styles.amount}>${amount}</Text>
          <Text style={styles.cryptoAmount}>{cryptoAmount} {cryptoType}</Text>
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.declineButton]} 
              onPress={onDecline}
            >
              <Text style={styles.buttonText}>DECLINE</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.acceptButton]} 
              onPress={onAccept}
            >
              <Text style={styles.buttonText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 24,
  },
  cryptoIconContainer: {
    marginBottom: 24,
  },
  cryptoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cryptoIconText: {
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  cryptoAmount: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  declineButton: {
    backgroundColor: '#2A2A2A',
  },
  acceptButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CryptoRequestModal;