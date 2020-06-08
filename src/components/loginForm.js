import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {Input, MyButton, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser, isLoggedIn} from '../actions'


 class LoginForm extends Component{

   componentDidMount(){
     if(this.props.fullLoading){
        this.props.isLoggedIn();
     }
   }

  onButtonClicked(){
    //firebase.auth kısmı ile email şifre ile giriş sapladık
    //hata mesajını işlem doğruysa ortadan kaldırdık
  const{email, password}=this.props;

 this.props.loginUser(email, password);
  }


  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  render(){
    //this.state den aldık error kodunu
    const {error, loading, fullLoading}=this.props;
    //errorMsg yi error a eşitledik ve hata varsa text olarak yazdırdık

if(fullLoading){
  return(<Spinner/>)
}

  const errorMsg=error?(
      <Text style={styles.errorStyle}>
      {error}
      </Text>
    ):
    null;

    return(
      <View style={styles.loginConteiner}>
      <View>
      <Input text='Email' inputPlaceHolder="Email Giriniz"
                 onChangeText={this.onEmailChange.bind(this)}
                 value={this.props.email}/>

      </View>
      <View>

      <Input text='Password' inputPlaceHolder="Şifre Giriniz"
                 onChangeText={this.onPasswordChange.bind(this)}

                 secureTextEntry
                 value={this.props.password}/>

      </View>
      {errorMsg}
    <MyButton spinner={loading}
              title= ' Giriş Yap'
              onPress={this.onButtonClicked.bind(this)}/>
      </View>
    )
  }
}
//borderWidth:1, butonun etrafına çizgi çeker
const styles=StyleSheet.create({

errorStyle:{
  fontSize:13,
  color:'red',
  paddingTop:10,
  alignSelf:'center'
},
loginConteiner:{
 flex:1,
 justifyContent:'center',
 padding:30,
 backgroundColor:'#fff',
//paddingBottom:100
}

})

/*
this.setState ile input alanına girilen değeri o alanda ki texte eşitledik
secureTextEntry ile girilen alanda ki bilgiyi yıldızlı göstedik
onPress ile butona tıklama özelliği kazandırdık
value(this.state.email/password) gibi bir ifade ile state ki boş ifadeyi
değiştirdik.

*/
const mapStateToProps=state=>{
  const{email, password, loading, error, fullLoading }=state.auth;
  return{
    email, password, loading, error, fullLoading
  }
}
export default connect(mapStateToProps,
  {emailChanged, passwordChanged, loginUser, isLoggedIn})(LoginForm);
