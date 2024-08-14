import { enableScreens } from 'react-native-screens';

enableScreens();

import React, { useEffect, useState  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import HomeScreen from './Homescreen';
import CalculationTable from './CalcTable';
import Plot3DScreen from './Plot3DScreen';

type RootStackParamList = {
  Loading: undefined;
  Home: undefined;
  CalculationTable: {
    surfaceLocation: {
      north: string;
      east: string;
      tvd: string;
    };
    targets: {
      north: string;
      east: string;
      tvd: string;
    }[];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LoadingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const fullText = "Directional Drilling Survey Calculator";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          navigation.replace('Home');
        }, 1000); // Wait 1 second before navigating to the Home screen
      }
    }, 100); // Adjust this value to speed up or slow down the typewriter effect

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.typewriterText}>{displayedText}</Text>
    </View>
  );
};


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CalculationTable" component={CalculationTable} options={{ headerShown: true, title: 'Calculation Table' }} />
        <Stack.Screen name="Plot3D" component={Plot3DScreen} options={{ title: '3D Well Path' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  typewriterText: {
    fontSize: 24,
    fontFamily: 'monospace', // This will give a typewriter-like appearance, adjust as needed
  }
});
