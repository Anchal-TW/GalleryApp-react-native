import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

import context from '../Helper/Context';
import { useContext } from 'react';

const ImageDetailScreen = () => {
  const { items } = useContext(context);
  console.warn(items);
  console.log(items);
  return (
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {items.map(item => (
          <View style={styles.viewStyle}>
            {/* <ImageBackground
              style={styles.imageStyle}
              source={item}
              resizeMode="cover">
              <TouchableOpacity style={styles.buttonStyle}>
                <Text>add</Text>
              </TouchableOpacity>
              
            </ImageBackground> */}
            <Image source={{ uri: item }} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: { marginBottom: 10 },
  viewStyle: { alignItems: 'center', padding: 16 },
  imageStyle: {
    flex: 1,
    height: 100,
    width: 100,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    position: 'absolute',
    right: 0,
  },
});

// const openImagePicker = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,

//     };
//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode != null) {
//         console.log('Image picker error: ', response.errorMessage);
//       } else {
//         console.warn(response.assets);
//       }
//     })

//   };

export default ImageDetailScreen;
