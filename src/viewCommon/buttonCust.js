
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';


export default class ButtonCust extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        styleBox: PropTypes.number.isRequired,
        styleTitle: PropTypes.number.isRequired,
        enabled: PropTypes.bool.isRequired,
        onButtonPress: PropTypes.func.isRequired,
        styleDisabled: PropTypes.object
    };

    render() {

        const disabledStyle = this.props.styleDisabled ? !this.props.enabled ? this.props.styleDisabled:null:null;
        return (

            <TouchableHighlight
                disabled = {!this.props.enabled}
                style = {[this.props.styleBox, disabledStyle]}
                onPress = {this.props.onButtonPress}
            >
                <Text style={this.props.styleTitle}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        );
    }
}