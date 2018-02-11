import {AppRegistry, Button, View} from 'react-native';
import App from './App';
import React, {Component} from "react";
import {StackNavigator} from 'react-navigation';
import Login from "./Login";
import Register from "./Register";

class MainActivity extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('APP')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: Login},
    APP: {screen: App},
    REGISTER: {screen: Register},
});
AppRegistry.registerComponent('ReactNativeApp', () => SimpleApp);
