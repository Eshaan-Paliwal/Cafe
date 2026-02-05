import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome to React Native!</Text>
        
        {/* Basic Text Example */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📝 Basic Text</Text>
          <Text style={styles.sectionText}>
            This is a simple React Native application to help you learn the basics.
          </Text>
        </View>

        {/* Counter Example */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔢 Counter State</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.counterText}>{count}</Text>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Learning Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 What to Learn Next</Text>
          <Text style={styles.bulletPoint}>• Components and JSX</Text>
          <Text style={styles.bulletPoint}>• Styling with StyleSheet</Text>
          <Text style={styles.bulletPoint}>• State and Props</Text>
          <Text style={styles.bulletPoint}>• Navigation</Text>
          <Text style={styles.bulletPoint}>• API Calls</Text>
          <Text style={styles.bulletPoint}>• Lists and FlatList</Text>
        </View>

        {/* File Structure Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📁 Project Structure</Text>
          <Text style={styles.codeText}>app/</Text>
          <Text style={styles.codeText}>├── App.js (main entry)</Text>
          <Text style={styles.codeText}>├── app.json (config)</Text>
          <Text style={styles.codeText}>├── screens/ (page components)</Text>
          <Text style={styles.codeText}>└── components/ (reusable components)</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#2196F3',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 60,
    textAlign: 'center',
  },
  codeText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#555',
    marginVertical: 2,
  },
});
