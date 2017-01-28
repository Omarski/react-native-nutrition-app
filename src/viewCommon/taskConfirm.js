
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class ButtonCust extends React.Component {

    static propTypes = {
        message: PropTypes.string.isRequired,
        cancelMessage: PropTypes.string.isRequired,
        confirmContStyle: PropTypes.number.isRequired,
        styleMessageBox: PropTypes.number.isRequired,
        styleMessage: PropTypes.number.isRequired,
        styleCancelBox: PropTypes.number.isRequired,
        styleCancel: PropTypes.number.isRequired,
        visible: PropTypes.bool.isRequired,
        onConfirmPress: PropTypes.func.isRequired,
        onConfirmCancel: PropTypes.func.isRequired,
    };

    render() {

        return (
            <View style={this.props.confirmContStyle}>
                <TouchableOpacity
                    onPress = {this.props.onConfirmPress}
                    style={this.props.styleMessageBox}>
                        <Text style={this.props.styleMessage}>
                            {this.props.message}
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {this.props.onConfirmCancel}
                    style={this.props.styleCancelBox}>
                        <Text style={this.props.styleCancel}>
                            {this.props.cancelMessage}
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}