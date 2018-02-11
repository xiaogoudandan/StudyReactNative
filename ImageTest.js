/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Text, View,
} from 'react-native';

/**
 * ES6方式
 */
export default class ImageTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let imaUrl=Platform.OS==='android'?'file:///'+'图片地址':'图片地址';
        return <View>
            <Image
                style={{height: 100, width: 100,tintColor:'red'}}
                source={require('./img/jiantou.png')}
                resizeMode={'contain'}
            />
            {/*<Image*/}
                {/*style={{height: 100, width: 100}}*/}
                {/*source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3938488120,2576257904&fm=27&gp=0.jpg'}}*/}
            {/*/>*/}
        </View>
    }
}