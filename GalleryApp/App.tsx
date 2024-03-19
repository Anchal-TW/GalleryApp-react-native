import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import ImageDetailScreen from './src/View/ImageDetailScreen';
import context, { ImageProvider } from './src/Helper/Context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ImageProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ImageDetailsScreen"
            component={ImageDetailScreen}
            options={{
              headerRight: HeaderRightButton,
            }}
          />
        </Stack.Navigator>
      </ImageProvider>
    </NavigationContainer>
  );
};

const HeaderRightButton = () => {
  const { openImagePicker } = useContext(context);
  return <Button title="ADD" onPress={openImagePicker} />;
};

// const openImagePicker = () => {
//   const options: ImageLibraryOptions = {
//     mediaType: 'photo',
//     includeBase64: false,
//   };
//   launchImageLibrary(options, response => {
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//       return;
//     }
//     if (response.errorCode != null) {
//       console.log('Image picker error: ', response.errorMessage);
//       return;
//     }
//   });
// };

const Home = (props: any) => (
  <View>
    <Button
      title="go to Image screen"
      onPress={() => props.navigation.navigate('ImageDetailsScreen')}
    />
  </View>
);

export default App;
