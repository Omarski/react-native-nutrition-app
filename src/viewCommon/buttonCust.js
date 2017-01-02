
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';


export default class ButtonCust extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        styleBox: PropTypes.object.isRequired,
        styleTitle: PropTypes.object.isRequired,
        enabled: PropTypes.func,
        onButtonPress: PropTypes.func.isRequired
    };

    render() {

        return (

            <TouchableHighlight
                style= {this.props.styleBox}
                onPress = {this.props.onButtonPress}
            >
                <Text style={this.props.styleTitle}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        );
    }
}