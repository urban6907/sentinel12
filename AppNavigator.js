// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/theme';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom tab bar icon
const TabIcon = ({ name, focused }) => (
  <View style={styles.tabIcon}>
    <Text style={[styles.tabIconText, focused && styles.tabIconActive]}>
      {name === 'Home' ? '💬' : name === 'Wallet' ? '💰' : '⚙️'}
    </Text>
  </View>
);

// Home stack
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: 'transparent',
        elevation: 0,
      },
      headerTintColor: colors.text,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="Chat" 
      component={ChatScreen} 
      options={({ route }) => ({ 
        title: route.params.contact.name,
        headerBackTitle: ' ',
      })}
    />
  </Stack.Navigator>
);

// Main tab navigator
const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: '#2A2A2A',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} />,
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ focused }) => <TabIcon name="Wallet" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconText: {
    fontSize: 20,
  },
  tabIconActive: {
    opacity: 1,
  },
});

export default AppNavigator;

