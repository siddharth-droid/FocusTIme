import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const [focusSubject, setFocusSuject] = useState('hello world');

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>I have an object</Text>
      ) : (
        <Text>Not have any object</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
