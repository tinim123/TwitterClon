import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {TextArea, MyButton} from './common';
import {changeTweet, sendTweet} from '../actions';


class NewTweet extends Component{

  onChangeTweet(tweet){
    this.props.changeTweet(tweet)
  }
  sendTweet(){
    this.props.sendTweet(this.props.tweet);
  }
  render(){
    return(
      <View style={styles.alanView}>
      <TextArea placeholder='Type here...'
      onChangeText={this.onChangeTweet.bind(this)}/>
      <MyButton spinner={false}
                title='Send'
                onPress={this.sendTweet.bind(this)}
                color='#E87B79'/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  alanView:{
    padding:23,
    flex:1,
    backgroundColor:'white',
    opacity:0.90
  }
});

const mapStateToProps=state=>{
  const {tweet} =state.tweetForm;
  return{
    tweet
  }
}

export default connect(mapStateToProps, {
  changeTweet,
  sendTweet
})(NewTweet);
