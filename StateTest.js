/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,View,
} from 'react-native';

/**
 * ES6方式
 */
export  default class StateTest extends Component{
    //定义state的两种方式
    //1、
    state={
        size:40,
    }
    constructor(props){
        super(props);
        //2、
        // this.state={
        //     size:90,
        // }
    }
  render(){
      return <View>
          <Text style={{fontSize:this.state.size}}>william</Text>
          <Text
              style={{fontSize:20}}
              onPress={()=>{
                  this.setState({
                      size:this.state.size-10
                  })
              }}
          >变小</Text>
          <Text
              style={{fontSize:20}}
              onPress={()=>{
                  this.setState({
                      size:this.state.size+10
                  })
              }}
          >变大</Text>
      </View>
  }
}