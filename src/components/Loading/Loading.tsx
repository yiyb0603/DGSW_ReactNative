import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator size="large" style ={styles.containers} />
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;