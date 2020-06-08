import React from 'react';
import {View, StyleSheet,Button} from 'react-native';
import {Spinner} from './spinner';

const MyButton=({spinner, title, onPress, color})=>{
const content=spinner?(
  <Spinner/>
): (
  <Button onPress={onPress}
                   color="#423189"
                  title={title} />
)
  return(
    <View style={styles.buttonStyle}>
   {content}
    </View>
  )
}

const styles=StyleSheet.create({
  buttonStyle:{
  marginTop:10, //üstten boşluk vermemizi sağlıyor butonda
  //eğer paddingTop deseydik içinde ki yazı aşağı kayardı sadece
  backgroundColor:'#423189',
  height:49,
  justifyContent:'center',
  borderRadius:10,
  fontSize:18,



  }
})

export{MyButton}
