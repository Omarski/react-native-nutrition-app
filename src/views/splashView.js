
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class SplashView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        styles:PropTypes.object.isRequired
    };

    render() {

        return (
            <View style={this.props.styles.centerXY}>

            </View>

        )
    }
}
