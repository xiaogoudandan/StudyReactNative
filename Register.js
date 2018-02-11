import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    TextInput, TouchableOpacity
} from 'react-native';
import './bmob/bmob.js'
import bmob from './bmob/bmob.js';
import Loading from "./Loading";

export default class Register extends Component {
    user = "";
    pass = "";

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        bmob.Bmob.initialize('appID', 'appKey', 'masterKey');
    }

    _onRegister() {
        if (this.user == "" || this.pass == "") {
            alert("内容不全");
            return;
        }
        this.checkUser(this.user);
    }

    /**
     * 查询用户存在性
     * @param username
     */
    checkUser(username) {
        var User = bmob.Bmob.Object.extend("_User");
        var qury = new bmob.Bmob.Query(User);
        qury.equalTo("username", username).find({
            success: (result) => {
                if (result.length == 0) {//不存在
                    this.insertUser(this.user, this.pass);
                } else {
                    alert("用户名已存在");
                }
            }, error: (error) => {
                alert("异常");
            }
        });
    }

    /**
     * 插入表操作
     * @param username
     * @param password
     */
    insertUser(username, password) {
        var User = bmob.Bmob.Object.extend("_User");
        var _user = new User();
        _user.set("username", username).set("password", password);
        _user.save(null, {
            success: (object) => {
                Alert.alert("注册成功", "跳转登陆页？？", [
                    {
                        text: '拒绝', onPress: () => {

                        }
                    },
                    {
                        text: '好的', onPress: () => {
                            this.props.navigation.navigate("Home", null)
                        }
                    },
                ])
            },
            error: function (error) {
                alert("异常：" + error.message);
            }
        })
    }


    static navigationOptions = {
        title: 'register',
    };

    render() {
        return (
            <View>
                <View style={{flexDirection: 'column'}}>
                    <TextInput
                        style={{fontSize: 20}}
                        placeholder="username"
                        onChangeText={(username) => this.user = username}
                    />
                    <TextInput
                        style={{fontSize: 20}}
                        placeholder="password"
                        onChangeText={(password) => this.pass = password}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={() => this._onRegister()}>
                        <Text
                            style={{
                                color: '#ffffff',
                                fontSize: 20,
                                width: 100,
                                backgroundColor: 'green',
                                borderRadius: 2,
                                padding: 5
                            }}
                        >
                            确定
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
