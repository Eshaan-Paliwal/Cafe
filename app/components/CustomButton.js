import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * CustomButton Component - A simple reusable button
 * Props:
 * - title: string - button text
 * - onPress: function - callback when pressed
 * - color: string - background color (optional)
 */
export const CustomButton = ({ title, onPress, color = '#2196F3' }) => {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
