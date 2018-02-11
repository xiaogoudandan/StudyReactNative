/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

/**
 * ES6方式
 */
export  default class Hello extends Component{
  render(){
      return <Text style={{fontSize:20}}>hello world .{this.props.name}</Text>
  }
}
/**
 * ES5方式
 */
var Hello =React.createClass({
    render(){
        return <Text style={{fontSize:20}}>hello world .{this.props.name}</Text>
    }
})
module.exports=Hello;

/**
 * 函数式方式
 * @returns {XML}
 * @constructor
 */
 function Hello(props) {
     return <Text style={{fontSize:20}}>hello world .{props.name}</Text>
 }
module.exports=Hello;

