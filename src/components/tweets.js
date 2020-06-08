import React, {Component} from 'react';
import _ from 'lodash';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchTweet, isLoggedIn} from '../actions';
import {Card} from './common';
import {Actions} from 'react-native-router-flux';


class Tweets extends Component{

  componentDidMount() {
    this.props.fetchTweet();
}

  renderItem({item}){
    return(
      <TouchableOpacity key={item.uid}
                        onPress={()=>{
                         Actions.updateTweet({
                           tweet:item
                         })
                        }}>
      <Card>
      <Text style={styles.tweetStyle}>{item.tweet} </Text>
      <Text style={styles.emailStyle}>{item.email} </Text>
      </Card>
      </TouchableOpacity>
    )
  }
  render(){
    const {tweetList}=this.props;
    return(
      <View style={styles.Alan}>
       <FlatList data={tweetList.reverse()}
                  renderItem={this.renderItem}
                  keyExtractor={(item)=>item.uid}

                  />

      </View>
    )
  }
}


const mapStateToProps=state=>{

  const tweetList=_.map(state.tweetList, (val, uid)=>{
    return{...val, uid}
  });
  return{
    tweetList
  }
}
export default connect(mapStateToProps,{
  fetchTweet, isLoggedIn
})(Tweets);


const styles=StyleSheet.create({
  Alan:{
    flex:1,
    backgroundColor:'white',
    padding:10,

  },
  tweetStyle:{
    color:'#7B8D93',
    fontSize:18,
    paddingTop:5,
    paddingLeft:3,
    opacity:0.99,



  },
  emailStyle:{
    color:'#AAB1B4',
    fontSize:14,
    alignSelf:'flex-end',
    paddingBottom:3
  }
})
