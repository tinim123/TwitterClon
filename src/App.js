import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';

/*import utf8 from 'utf8';
import base64 from 'react-native-base64';

base64.encode('Some string to encode to base64');
base64.decode('SW4gbXkgZXllcywgaW5kaXNwb3NlZA0KSW4gZGlzZ3Vpc2VzIG5vIG9uZSBrbm93cw0KUklQIEND==')
utf8.encode('\xA9');
utf8.encode('\uD800\uDC01');
utf8.decode('\xC2\xA9');
utf8.decode('\xF0\x90\x80\x81');*/

export default class TwitterKlon extends Component{

componentWillMount(){
  const firebaseConfig = {
    apiKey: *************
    authDomain: ****************
    databaseURL: ************
    projectId: ***********
    storageBucket: "",
    messagingSenderId: **********
    appId:**********
  };
  firebase.initializeApp(firebaseConfig);
}

  render(){
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
      );
  }
}

styles=StyleSheet.create({
  viewAlan:{
    flex:1,
    justifyContent:'center'

  }

  })
