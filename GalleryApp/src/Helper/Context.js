import { createContext, useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';

const context = createContext();

export function ImageProvider({ children }) {
  let photos = [
    // require('../../src/images/beach.jpg'),
    // require('../../src/images/beach.jpg'),
    // require('../../src/images/forest.jpg'),
  ];

  const [items, setItem] = useState(photos);

  const options = {
    mediaType: 'photo',
    includeBase64: false,
  };

  const openImagePicker = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      }
      if (response.errorCode != null) {
        console.log('Image picker error: ', response.errorMessage);
        return;
      }
      if (response.assets != null) {
        console.warn(response.assets?.[0].uri, '---');
        setItem(photos => [...photos, response.assets?.[0].uri]);
      }
    });
  };

  return (
    <context.Provider value={{ items, openImagePicker }}>
      {children}
    </context.Provider>
  );
}

export default context;
