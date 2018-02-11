/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {
  Text,View,
} from 'react-native';
import PropTypes from 'prop-types';//React removed PropTypes from core library as of React v15.5
/**
 * ES6方式
 */
export  default class PropsComponent extends Component{
    //默认的类型，在上文未给与该类型的值的时候会使用默认的值
    static defaultProps={
        sex:'男',
        user_id:'20000000'
    }
    //类型检查，只有对应的类型才会正常运行，不然报错 指定类型
    static propTypes={
        sex:PropTypes.string,
        user_id:PropTypes.string
    }
  render(){
      return <View>
          <Text style={{fontSize:20}}>性别：{this.props.sex}</Text>
          <Text style={{fontSize:20}}>学号：{this.props.user_id}</Text>
      </View>
  }
}
