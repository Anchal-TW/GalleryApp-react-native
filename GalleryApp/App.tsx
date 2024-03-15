
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ListScreen from './View/ListScreen';
import ImageDetailScreen from './View/ImageDetailScreen';
import CounterScreen from './View/CounterScreen';
import ColorScreen from './View/ColorScreen';
import {ImageLibraryOptions, launchImageLibrary} from 'react-native-image-picker';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {Home}/>
        <Stack.Screen name = 'ImageDetailScreen' component = {ImageDetailScreen} options={(navigation) =>({
          
        headerRight: () => {
          return <Button title='ADD' onPress={openImagePicker}></Button>
      }})}/>
 
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const openImagePicker = () => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
    
  };
  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode != null) {
      console.log('Image picker error: ', response.errorMessage);
    } else {
      console.warn(response.assets);
    }
  })

};

const Home = (props: any) => {
  return  <View>
    <Button title='go to Image screen' onPress={() => props.navigation.navigate('ImageDetailScreen')}></Button>
    </View>
}


export default App;
