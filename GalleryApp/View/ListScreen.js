import React, {useState} from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


const ListScreen = () => {

  const [name, setName] = useState("anil");

    const users = [
        {
          id:1,
          name: 'tom'
        },
        {
          id:2,
          name: 'sam'
        },
        {
          id:3,
          name: 'john'
        },
        {
          id:4,
          name: 'jack'
        }
      ]
    
      return (
        <View>
           <Text style = {{padding: 20, textAlign: 'center'}}>{name}'s friend</Text>
          <FlatList 
          data={users}
          renderItem={({item}) => 
          <Text style = {styles.textStyle}>{item.name}</Text>
        }
          keyExtractor={item => item.id}
          />

      <Button title ='update name' onPress={() => setName("Ron")}/>
          </View>
      );
}

const styles = StyleSheet.create({
    textStyle: {fontSize: 24, padding: 10, color: 'orange', margin: 2, textAlign: 'center', flex: 1},
    box: {flexDirection: 'row', borderWidth: 2, borderColor: 'orange', marginBottom: 10}
})

export default ListScreen;