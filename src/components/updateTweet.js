import React, {Component} from 'react';
import {View,Text, StyleSheet, Alert} from 'react-native';
import {TextArea, MyButton} from './common';
import {connect} from 'react-redux';
import{changeTweet, updateTweet, deleteTweet} from '../actions';

class UpdateTweet extends Component{

componentDidMount(){
  const {tweet}=this.props.tweet;
  this.props.changeTweet(tweet);
  this.checkEmail=this.checkEmail.bind(this);
}

onChangeTweet(tweet){
  this.props.changeTweet(tweet);
}

checkEmail(callback){
  const {email}=this.props.user;
  const tweetEmail=this.props.tweet.email;
  if (tweetEmail===email) {
  callback();
  } else{
    Alert.alert(
      'Wrong Email',
      'This is not your tweet, so you can not delete or update',
      [
        {text:'Cancel', onPress:() =>console.log('Cancel Pressed')}
      ]
    );
  }
}

updateTweet(){
this.checkEmail(()=>{
  const tweetObj={...this.props.tweet,
                 tweet: this.props.tweetForm.tweet};
  this.props.updateTweet(tweetObj);
})
}
deleteTweet(){

this.checkEmail(()=>{
  Alert.alert(
    'Are you sure?',
    'When you press OK this tweet will be deleted',
    [
      {text:'OK', onPress:() => {
        const {uid}=this.props.tweet;
        this.props.deleteTweet(uid);
      }},
      {text:'Cancel', onPress:() =>console.log('Cancel Pressed')}
    ]
  );
})
}

  render(){
    const {tweetForm}=this.props
    return(
      <View style={styles.updateAlan}>
      <TextArea placeholder='Type here...'
      value={tweetForm.tweet}
      onChangeText={this.onChangeTweet.bind(this)}/>
      <MyButton spinner={false}
                title='Update'
                onPress={this.updateTweet.bind(this)}
                color='#E87B79'/>
     <MyButton spinner={false}
                title='Delete'
               onPress={this.deleteTweet.bind(this)}
                color='#E87B79'
                />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  updateAlan:{
    flex:1,
    backgroundColor:'white',
    padding:15


  }
});

const mapStateToProps=state=>{
  return{
    user:state.auth.user,
    tweetForm:state.tweetForm
  }
}

export default connect(mapStateToProps, {
  changeTweet, updateTweet, deleteTweet
})(UpdateTweet);
