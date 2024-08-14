import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Plot3DScreen = ({ route }) => {
  const { surfaceLocation, targets } = route.params;
  return (
    <View style={styles.container}>
      <Text>Plotting 3D Graph</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Plot3DScreen;
