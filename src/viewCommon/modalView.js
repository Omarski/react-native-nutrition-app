
import React, {PropTypes} from 'react';

import {
    View,
    Modal
} from 'react-native';


export default class ModalView extends React.Component {

    static propTypes = {
        styles:PropTypes.object.isRequired,
        content: PropTypes.object.isRequired,
        animationType:PropTypes.string.isRequired,
        modalVisible: PropTypes.bool.isRequired,
        transparent: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func
    };


    render() {

        return (

            <View style={{flex:1, marginTop:22}}>
                <Modal
                    animationType = {this.props.animationType}
                    transparent = {this.props.transparent}
                    visible = {this.props.modalVisible}
                    onRequestClose = {this.props.onRequestClose}
                >
                    {this.props.content}
                </Modal>
            </View>
        );
    }
}