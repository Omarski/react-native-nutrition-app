
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
       console.log(">>>>>> : " + imgPath+"imageModal"+capFirstLetter(targetObj.id)+".png");
       // source= {require(imgPath+"imageModal"+capFirstLetter(targetObj.id)+".png")}
        // source= {{uri:imgPath+"imageModal"+capFirstLetter(targetObj.id)+".png"}}

        return (

            <View style={this.props.styles.modalShell}>
                <Image
                    source= {require("../../images/imageModalWeightLoss.png")}
                    style = {this.props.styles.targetModalViewImg}
                />
                <Text style={this.props.styles.modalHeader}>
                    {targetObj.title}
                </Text>
                <Text style={this.props.styles.modalText}>
                    {targetObj.modalSummary}
                </Text>
                {this.props.specialSelectorIconsColl ?
                    <View style = {this.props.styles.modalSpecialIconsShell}>
                    <SpecialSelectorIconsView
                        specialSelectorIconsColl = {this.props.specialSelectorIconsColl}
                        selectObj = {this.props.targetObj}
                    /></View>:null}
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