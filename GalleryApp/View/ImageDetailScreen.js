import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Button } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';

const ImageDetailScreen = ({navigation}) => {

    const users1 = [
        {

            title: 'mountain',
            imageSource:
                require('../images/beach.jpg'),
            imageScore: 9
        },
        {
            title: 'sea',
            imageSource: require('../images/beach.jpg'),
            imageScore: 7
        },
        {
            title: 'tiger',
            imageSource: require('../images/forest.jpg'),
            imageScore: 6
        },
        {

            title: 'mountain',
            imageSource:
                require('../images/beach.jpg'),
            imageScore: 9
        },
        {
            title: 'sea',
            imageSource: require('../images/beach.jpg'),
            imageScore: 7
        }
    ]

    // React.useEffect(() => {
    //     navigation.setOptions({headerRight: () => {
    //         <Button title='ADD' onPress={
    //             openImagePicker
    //         }/>
    //     }})
    // },[navigation]);

    return <ScrollView> 
        <View style = {{flex:1, 
    flexDirection: 'row', flexWrap: 'wrap'
  }}>
        {
            users1.map((item) => 
            <View style={styles.viewStryle}>
            <ImageBackground style = {styles.imageStyle} source={item.imageSource} resizeMode="cover">
            <TouchableOpacity style = {styles.buttonStyle}> 
            <Text>add</Text>  
            </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>ImageScore {item.imageScore}</Text>
        </View>
            )
        }
        
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    textStyle: { marginBottom: 10 },
    viewStryle: { alignItems: 'center', padding: 16 },
    imageStyle: {
         flex: 1, height: 100, width: 100
    },
    buttonStyle: { 
   backgroundColor: 'grey',
    position: 'absolute', 
    right: 0
   
     }
})

const openImagePicker = () => {
    const options = {
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

export default ImageDetailScreen;