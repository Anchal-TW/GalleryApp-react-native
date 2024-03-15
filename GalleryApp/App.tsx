import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View } from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import ImageDetailScreen from './src/View/ImageDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ImageDetailsScreen"
        component={ImageDetailScreen}
        options={{
          headerRight: headerRightButton,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const headerRightButton = () => (
  <Button title="ADD" onPress={openImagePicker} />
);

const openImagePicker = () => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
  };
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return;
    }
    if (response.errorCode != null) {
      console.log('Image picker error: ', response.errorMessage);
      return;
    }
  });
};

const Home = (props: any) => (
  <View>
    <Button
      title="go to Image screen"
      onPress={() => props.navigation.navigate('ImageDetailsScreen')}
    />
  </View>
);

export default App;
