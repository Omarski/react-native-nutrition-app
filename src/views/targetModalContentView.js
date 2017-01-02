
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import SpecialSelectorIconsView from './specialSelectorIconsView';
import ButtonCust from '../viewCommon/buttonCust';
import {capFirstLetter} from '../js/common';

export default class TargetModalContentView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        targetObj: PropTypes.object.isRequired,
        specialSelectorIconsColl: PropTypes.array,
        onPressClose: PropTypes.func.isRequired
    };

    onPressDoneBtn = () =>{
        this.props.onPressClose(this.props.targetObj);
    };

    render() {

       const targetObj = this.props.targetObj;
       const imgPath = "../../images/" ;
       return (

            <View style={{flex: 1, paddingTop: 22}}>
                <Image
                    src = {require(imgPath+"imageModal"+capFirstLetter(targetObj.id))}
                    style = {this.props.styles.targetModalViewImg}
                />
                <Text style={this.props.styles.modalHeader}>
                    {targetObj.title}
                </Text>
                <Text style={this.props.styles.modalText}>
                    {targetObj.modalSummary}
                </Text>
                {this.props.specialSelectorIconsColl ?
                    <SpecialSelectorIconsView
                        specialSelectorIconsColl = {this.props.specialSelectorIconsColl}
                        selectObj = {this.props.targetObj}
                    />:null}
                <ButtonCust
                    title = "Done"
                    styleBox= {this.props.styles.buttonModalDone}
                    styleTitle={this.props.styles.buttonTitleModalDone}
                    onButtonPress={this.onPressDoneBtn}
                />
            </View>
        );
    }
}