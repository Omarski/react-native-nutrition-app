
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

export default class SavedCollModalContentView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        savedCollObj: PropTypes.object.isRequired,
        specialSelectorIconsColl: PropTypes.array,
        onPressClose: PropTypes.func.isRequired
    };

    onPressDoneBtn = () =>{
        this.props.onPressClose(this.props.savedCollObj);
    };

    render() {

        const savedCollObj = this.props.savedCollObj;

        // source= {require(imgPath+"imageModal"+capFirstLetter(savedCollObj.id)+".png")}

        return (

            <View style={this.props.styles.modalShell}>
                <Image
                    source= {require("../../images/imageModalWeightLoss.png")}
                    style = {this.props.styles.targetModalViewImg}
                />
                <SocialShare
                    ref="socialShare"
                    styles={this.props.styles}
                    shareOptions={this.props.appDataShareOptions}
                    shareImageBase64={this.props.appDataShareImageBase64}
                />
                <CollectionDisplayView
                    styles={this.props.styles}
                    userSelectItems={this.props.userSelectItems}
                    userSelectStandard={this.props.userSelectStandard}
                    titleCap={this.props.titleCap}
                />
                <StatsTrackerView
                    styles={this.props.styles}
                    userSelectItems={this.props.userSelectItems}
                    userSelectTargets={this.props.userSelectTargets}
                    userSelectStandard={this.props.userSelectStandard}
                />
                <ButtonCust
                    title = {this.props.appDataShareBtnText}
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressSimpleShare}
                    enabled={this.state.inputVerified}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        );
    }
}