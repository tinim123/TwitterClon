import React from  'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextArea=({placeholder, onChangeText, value})=>{
  return(
    <View style={styles.textAreaWrapper}>
    <TextInput placeholder={placeholder}
               onChangeText={onChangeText}
               multiline={true}
               value={value}
               style={styles.textArea}
               />
    </View>
  )
}

const styles=StyleSheet.create({
  textAreaWrapper:{

    borderWidth:1,
    borderColor:'#CFD8DC',
    height:180,

  },
  textArea:{

    color:'#7B8D93',
    fontSize:18,
    opacity:0.6
  }
});

export {TextArea};
