// src/screens/WalletScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { colors } from '../utils/theme';

const cryptoAssets = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 1.25,
    value: 8940.75,
    color: colors.accent,
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 3.40,
    value: 2863.21,
    color: colors.ethereum,
  },
  {
    id: '3',
    name: 'USD Coin',
    symbol: 'USDC',
    amount: 530.00,
    value: 530.00,
    color: colors.usdcoin,
  },
];

const CryptoIcon = ({ color }) => (
  <View style={[styles.cryptoIcon, { backgroundColor: color }]}>
    <Text style={styles.cryptoIconText}>₿</Text>
  </View>
);

const WalletScreen = () => {
  const totalBalance = cryptoAssets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SENTINEL</Text>
      </View>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>${totalBalance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Receive</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.assetsHeader}>
        <Text style={styles.assetsTitle}>Assets</Text>
      </View>
      
      <ScrollView>
        {cryptoAssets.map((asset) => (
          <View key={asset.id} style={styles.assetItem}>
            <CryptoIcon color={asset.color} />
            <View style={styles.assetInfo}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetAmount}>{asset.amount}</Text>
            </View>
            <View style={styles.assetValue}>
              <Text style={styles.assetValueText}>{asset.amount} {asset.symbol}</Text>
              <Text style={styles.assetValueInUsd}>${asset.value.toLocaleString()}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 32,
  },
  actionButton: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  actionButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  assetsHeader: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  assetsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  assetItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cryptoIconText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  assetInfo: {
    flex: 1,
  },
  assetName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  assetAmount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  assetValue: {
    alignItems: 'flex-end',
  },
  assetValueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  assetValueInUsd: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default WalletScreen;