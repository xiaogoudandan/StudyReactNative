import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ProgressBarAndroid,
    Modal,
} from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <Modal
                transparent={true}
                onRequestClose={() => this.onRequestClose()}
            >
                <View style={styles.loadingBox}>
                    <ProgressBarAndroid styleAttr='Inverse' color='#FF4500'/>
                </View>
            </Modal>
        );
    }
}
const styles=StyleSheet.create({
    loadingBox: { // Loading居中
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)',//半透明
    }
})
