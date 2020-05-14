import React, {useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

function SplashScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const options = {
  animationEnabled: false,
};

function App() {
  const navigationContainerRef = useRef(null);

  useEffect(() => {
    navigationContainerRef.current?.reset({
      routes: [{name: 'Home'}],
      index: 0,
    });
  }, []);

  return (
    <NavigationContainer ref={navigationContainerRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={options}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
