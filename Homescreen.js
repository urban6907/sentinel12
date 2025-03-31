// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { colors } from '../utils/theme';

const contacts = [
  {
    id: '1',
    name: 'Alice Martin',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: "Sure, let's meet tomorrow morning.",
    timestamp: '2:15 PM',
  },
  {
    id: '2',
    name: 'Bob Johnson',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: "I'll send you the report by the end...",
    timestamp: '1:45 PM',
  },
  {
    id: '3',
    name: 'Sarah Kim',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: 'Great job on the presentation!',
    timestamp: '12:10 PM',
  },
  {
    id: '4',
    name: 'James Lee',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: 'Are we still on for lunch today?',
    timestamp: '9:30 AM',
  },
  {
    id: '5',
    name: 'Emma White',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: "Let's schedule a call for next week.",
    timestamp: 'Yesterday',
  },
  {
    id: '6',
    name: 'Olivia Taylor',
    avatar: 'https://via.placeholder.com/60',
    lastMessage: 'When is the deadline for the proj...',
    timestamp: 'Yesterday',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderContact = ({ item }) => (
    <TouchableOpacity 
      style={styles.contactItem}
      onPress={() => navigation.navigate('Chat', { contact: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.contactInfo}>
        <View style={styles.contactHeader}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sentinel</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.textSecondary}
        />
      </View>
      
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.text,
  },
  contactItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  contactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  timestamp: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  lastMessage: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default HomeScreen;