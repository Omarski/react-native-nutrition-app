
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class TargetModalContentView extends React.Component {

    static propTypes = {
        targetObj: PropTypes.object.isRequired,
        onPressClose: PropTypes.func.isRequired
    };


    render() {

        return (

            <View style={{flex: 1, paddingTop: 22}}>
                <TouchableHighlight onPress={() => {
                    this.props.onPressClose(this.props.targetObj)
                }}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>

            </View>
        );
    }
}