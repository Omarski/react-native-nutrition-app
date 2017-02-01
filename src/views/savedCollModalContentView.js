
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import CollectionDisplayView from './collectionDisplayView';
import SpecialSelectorIconsView from './specialSelectorIconsView';
import StatsTrackerView from './statsTrackerView';
import SocialShare from '../viewCommon/socialShare';
import ButtonCust from '../viewCommon/buttonCust';
import TaskConfirm from '../viewCommon/taskConfirm';

//import {capFirstLetter} from '../js/common';

export default class SavedCollModalContentView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        savedCollObj: PropTypes.object.isRequired,
        appDataDoneBtnText: PropTypes.string.isRequired,
        specialSelectorIconsColl: PropTypes.array,
        confirmSupportObj: PropTypes.object.isRequired,
        userSelectStandard: PropTypes.string.isRequired,
        titleCap:PropTypes.func,
        onPressClose: PropTypes.func.isRequired
    };

    onPressDoneBtn = () =>{
        this.props.onPressClose(this.props.savedCollObj);
    };

    render() {

        return (

            <View style={this.props.styles.modalShell}>
                <Text style={[this.props.styles.pageHeader, this.props.styles.appCollModalHeader]}>
                    {this.props.savedCollObj.title}
                </Text>
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
                    userSelectItems={this.props.savedCollObj.itemsColl}
                    userSelectStandard={this.props.userSelectStandard}
                    titleCap={this.props.titleCap}
                />
                <StatsTrackerView
                    styles={this.props.styles}
                    userSelectItems={this.props.savedCollObj.itemsColl}
                    userSelectTargets={this.props.userSelectTargets}
                    userSelectStandard={this.props.userSelectStandard}
                />

                {this.props.confirmSupportObj ? <TaskConfirm
                    message = {this.props.confirmSupportObj.message}
                    cancelMessage = {this.props.confirmSupportObj.cancelMessage}
                    confirmContStyle = {this.props.confirmSupportObj.confirmContStyle}
                    styleMessageBox = {this.props.confirmSupportObj.styleMessageBox}
                    styleMessage = {this.props.confirmSupportObj.styleMessage}
                    styleCancelBox = {this.props.confirmSupportObj.styleCancelBox}
                    styleCancel = {this.props.confirmSupportObj.styleCancel}
                    visible = {this.props.confirmSupportObj.visible}
                    onConfirmPress = {this.props.confirmSupportObj.onConfirmPress}
                    onConfirmCancel = {this.props.confirmSupportObj.onConfirmCancel}
                    taskId = {this.props.savedCollObj.id}
                    />:null}

                {this.props.specialSelectorIconsColl ?
                    <View style = {this.props.styles.modalSpecialIconsShell}>
                        <SpecialSelectorIconsView
                            specialSelectorIconsColl = {this.props.specialSelectorIconsColl}
                            selectObj = {this.props.savedCollObj}
                        /></View>:null}

                <ButtonCust
                    title = {this.props.appDataDoneBtnText}
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressDoneBtn}
                    enabled={true}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        );
    }
}