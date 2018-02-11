/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

var  name='小米';
var  age='22';
export {name,age};//导出
/**
 * ES6方式
 */
export  default class EComponent extends Component{
  render(){
      return <Text style={{fontSize:20}}>hello world.</Text>
  }
}

export function sum(a,b) {
    return a+b;
}
/**
 * ES5方式
 */
// var Hello =React.createClass({
//     render(){
//         return <Text style={{fontSize:20}}>hello world .{this.props.name}</Text>
//     }
// })
// module.exports=Hello;

/**
 * 函数式方式
 * @returns {XML}
 * @constructor
 */
//  function Hello(props) {
//      return <Text style={{fontSize:20}}>hello world .{props.name}</Text>
//  }
// module.exports=Hello;

