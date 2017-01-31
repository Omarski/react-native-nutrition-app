
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class TaskConfirm extends React.Component {

    static propTypes = {
        taskId: PropTypes.string,
        message: PropTypes.string.isRequired,
        cancelMessage: PropTypes.string.isRequired,
        confirmContStyle: PropTypes.number.isRequired,
        styleMessageBox: PropTypes.number.isRequired,
        styleMessage: PropTypes.number.isRequired,
        styleCancelBox: PropTypes.number.isRequired,
        styleCancel: PropTypes.number.isRequired,
        visible: PropTypes.func.isRequired,
        onConfirmPress: PropTypes.func.isRequired,
        onConfirmCancel: PropTypes.func.isRequired,
    };

    render() {

        return (
           <View style={[this.props.confirmContStyle,{opacity: this.props.visible(this.props.taskId) ? 1:0}]}>
                <TouchableOpacity
                    onPress = {()=>{this.props.onConfirmPress(this.props.taskId)}}
                    style={this.props.styleMessageBox}>
                        <Text style={this.props.styleMessage}>
                            {this.props.message}
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {()=>this.props.onConfirmCancel(this.props.taskId)}
                    style={this.props.styleCancelBox}>
                        <Text style={this.props.styleCancel}>
                            {this.props.cancelMessage}
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}