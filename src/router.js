import React from 'react';
import firebase from 'firebase';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';

const RouterComp=()=>{
  return(
    <Router titleStyle={{color:'#E87B79'}}>
    <Scene key='root' hideNavBar={true}>
    <Scene key='auth' headerLayoutPreset="center" >
    <Scene key='login'
           component={LoginForm}
           title='Login'
           hideNavBar={true}
           />
    </Scene>
    <Scene key='main' headerLayoutPreset="center" >
    <Scene key='tweets'
          component={Tweets}
          title='Twitter Clon'
          rightTitle='New'
          onRight={()=>Actions.newTweet()}
          onLeft={()=>{
            firebase.auth().signOut();
            Actions.auth();
          }}
          leftTitle='Logout'
          />
  <Scene key='newTweet'
        component={NewTweet}
        title='New Tweet'
            />
    <Scene key='updateTweet'
          component={UpdateTweet}
          title='Update/Delete'
          />
    </Scene>
    </Scene>
    </Router>
  )
}

export default RouterComp;
