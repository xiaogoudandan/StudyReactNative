/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';
import LifecycleComponent from "./LifecycleComponent";
import EComponent, {name, age, sum} from "./EComponent";
import PropsComponent from "./PropsComponent";
import StateTest from "./StateTest";
import RefTest from "./RefTest";
import ImageTest from "./ImageTest";


export default class App extends Component<{}> {
    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: 'HOME',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'#ffffff'}
    });

    constructor(props) {
        super(props);
        this.state = ({
            remove: false,
            result: '',
            size: 0
        })
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent/>;
        var text = !this.state.remove ? "删了" : "复活";
        var params = {sex: '男', user_id: '201412222'};
        var {sex} = params;//解构赋值
        return (
            <View style={styles.container}>
                {/*<Text*/}
                    {/*style={{fontSize: 20}}*/}
                    {/*onPress={() => {*/}
                        {/*this.setState({*/}
                            {/*remove: !this.state.remove,*/}
                        {/*})*/}
                    {/*}}*/}
                {/*>{text}</Text>*/}
                {view}
                <Text style={{fontSize: 20}}>名字：{name}</Text>
                <Text style={{fontSize: 20}}>年龄：{age}</Text>
                <Text style={{fontSize: 20}}
                      onPress={() => {
                          var result = sum(2, 3);
                          this.setState({
                              result: result,
                          })
                      }}
                >2+3={this.state.result}</Text>
                <PropsComponent sex={sex}/>
                {/*延展操作符 在多个属性下可以方便引入*/}
                <PropsComponent {...params}/>
                <StateTest/>
                <Text style={{fontSize: 20}}
                      onPress={() => {
                          var s = this.refs["reftext"].getSize();
                          //var s=this.refs.reftext.getSize();
                          //var s=this.reftext.getSize();
                          this.setState({
                              size: s,
                          })
                      }}
                >当前下面文字大小：{this.state.size}</Text>
                <RefTest
                    ref="reftext"
                    //ref={reftext => this.reftext = reftext}
                />
                <ImageTest/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
