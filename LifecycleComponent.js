/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text, View,
} from 'react-native';

/**
 * ES6方式
 */
export  default class LifecycleComponent extends Component{
    /**
     * 组件的初始化
     * @param props
     */
    constructor(props){
        super(props);
        console.log('---------->constructor');
        //点击次数
        this.state={
            count:0,
        }
    }

    /**
     * 渲染之前调用
     */
    componentWillMount(){
        console.log('---------->componentWillMount');
    }

    /**
     * 初始化渲染后调用
     */
    componentDidMount(){
        console.log('---------->componentDidMount');
    }

    /**
     * 收到新的props抵用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        console.log('---------->componentWillReceiveProps');
    }

    /**
     * 是否需要更新
     * @param nextProps
     * @param nextState
     */
    shouldComponentUpdate(nextProps,nextState){
        console.log('---------->shouldComponentUpdate');
      return true;
    }

    /**
     * 更新之前调用
     */
    componentWillUpdate(){
        console.log('---------->componentWillUpdate');
    }

    /**
     * 更新之后
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate( prevProps,  prevState){
        console.log('---------->componentDidUpdate');
    }

    /**
     * 移除之前
     */
    componentWillUnmount(){
        console.log('---------->componentWillUnmount');
    }
  render(){
      console.log('---------->render');
      return <View>
               <Text
                  style={{fontSize:20}}
                  onPress={()=>{
                          this.setState({
                              count:this.state.count+1,
                          })
                      }
                  }
              >点击了{this.state.count}次
               </Text>
              </View>
  }
}

