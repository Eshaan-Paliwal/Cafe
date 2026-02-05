import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

/**
 * Example Screen - Shows how to use FlatList
 */
export const ListExampleScreen = () => {
  const data = [
    { id: '1', name: 'Learn Components' },
    { id: '2', name: 'Master Styling' },
    { id: '3', name: 'Handle State' },
    { id: '4', name: 'Use Navigation' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  item: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
