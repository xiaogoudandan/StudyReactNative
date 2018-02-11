import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput, TouchableOpacity
} from 'react-native';
import './bmob/bmob.js'
import bmob from './bmob/bmob.js';
import Loading from "./Loading";

export default class Login extends Component {
    nai;
    user = "";
    pass = "";

    _onRegister() {
        const {navigate} = this.props.navigation;
        navigate("REGISTER");
    }

    _onLogin() {
        const {navigate} = this.props.navigation;
        //查询bmob
        if (this.loginCheck(this.user, this.pass)) {
        } else {
            // alert("查询失败: ");

        }
    }

    loginCheck(username, password) {
        var list = bmob.Bmob.Object.extend("_User");
        var qury = new bmob.Bmob.Query(list);
        var q = qury.equalTo("username", username).equalTo("password", password);
        q.find({
            success: (result)=>{
                alert("查询成功: "+result.length);
                if(result.length==1){
                    this.props.navigation.navigate("APP",null);
                }
            },
            error: function (error) {
                alert("查询失败: " + error.code + " " + error.message);
            }
        })
    }


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
        };
        bmob.Bmob.initialize('appID', 'appKey', 'masterKey');
        this.nai=this.props.navigation;
    }

    static navigationOptions = {
        title: 'login',
    };

    render() {
        return (
            <View>
                {/*{*/}
                {/*this.state.loading == true ? (<Loading/>) : (null)*/}
                {/*}*/}
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
                    <TouchableOpacity onPress={() => this._onLogin()}>
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
                            login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._onRegister()}>
                        <Text
                            style={{fontSize: 20, width: 100}}
                        >
                            register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
