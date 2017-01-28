
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {categorise} from '../js/common.js';
import SelectionSliderListView from './selectionSliderListView';
import SocialShare from '../viewCommon/socialShare';
import ButtonCust from '../viewCommon/buttonCust';
import SavedCollModalContentView from './savedCollModalContentView';

import {savedCollModalVisibilityAction, deleteUserSavedCollAction} from '../actions/actions';


class SavedCollectionsView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        appDataSavedViewHeader:PropTypes.string.isRequired,
        savedCollSource:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };

    static state = {
        showConfirm:false
    };

    prepItemSliders = () => {
        let sliders = this.props.savedCollSource === "user" ?
        categorise(this.props.userDataSavedColl,"category"):
        categorise(this.props.appDataSavedColl,"category");
        return sliders;
    };

    onPressSimpleShare = () => {
        this.refs.socialShare.openSimpleShare();
    };

    onPressImage64Share = () => {
        this.refs.socialShare.openSimpleImage64Share();
    };

    onPressUIShare = () => {
        this.refs.socialShare.openUIComponentShare();
    };

    onPressIconDelete = () => {
    };

    onPressHome = () => {
    };

    onConfirmDeleteColl = (savedCollObj) => {
        this.props.dispatch(deleteUserSavedCollAction(savedCollObj));
    };


    prepSpecialIconsColl = () => {

        return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
                showIcon:()=>true
            },

            {   id:"delete",
                imgSrcOn:{uri:"specialSelectorIconDelete.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconDelete,
                styleOff:null,
                onPressIcon:this.onPressIconDelete,
                showIcon:()=>true
            },
        ]
    };

    prepSpecialModalIconsColl = () => {

        return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconModalShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
                showIcon:()=>true
            },
            {   id:"delete",
                imgSrcOn:{uri:"specialSelectorIconDelete.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconModalDelete,
                styleOff:null,
                onPressIcon:this.onPressIconDelete,
                showIcon:()=>true
            }
        ]
    };

    //modal
    prepModalData = (myCollObj) => {

        if (myCollObj){
            return {
                animationType:"fade",
                modalVisible:!!this.props.savedCollModalActive,
                transparent:false,
                content: this.prepModalContent(myCollObj)
            }
        } else return null;
    };

    prepModalContent = (savedCollObj) => {
        return(<SavedCollModalContentView
            styles = {this.props.styles}
            savedCollObj={savedCollObj}
            specialSelectorIconsColl = {this.prepSpecialModalIconsColl()}
            userSelectStandard = {this.props.userSelectStandard}
            appDataDoneBtnText = {this.props.appDataDoneBtnText}
            titleCap = {this.props.titleCap}
            onPressClose={this.onModalClose}
            appDataShareOptions={this.props.appDataShareOptions}
            appDataShareImageBase64={this.props.appDataShareImageBase64}
        />)
    };

    onModalClose = (savedCollObj) => {
        this.props.dispatch(savedCollModalVisibilityAction(savedCollObj,false));
    };

    onPressBlock = (savedCollObj) => {
        this.prepModalData(savedCollObj);
        this.props.dispatch(savedCollModalVisibilityAction(savedCollObj,true));
    };

    render() {

        const confirmSupportObj = {
            message: this.props.appDataDeleteCollConfirmText,
            cancelMessage: this.props.appDataCancelDeleteCollConfirmText,
            confirmContStyle: this.props.styles.deleteCollConfirmCont,
            styleMessageBox: this.props.styles.deleteCollConfirmMessageBox,
            styleMessage: this.props.styles.deleteCollConfirmMessage,
            styleCancelBox: this.props.styles.deleteCollConfirmCancelBox,
            styleCancel: this.props.styles.deleteCollConfirmCancel,
            visible:this.state.showConfirm,
            onConfirmPress:this.onConfirmDeleteColl,
            onConfirmCancel:this.setState({showConfirm:false})
        };

        return (
            <View style={{flex:1}}>
                {/*page header*/}
                <Text style={[this.props.styles.pageHeader, this.props.styles.savedCollViewHeader]}>
                    {this.props.appDataSavedViewHeader}
                </Text>
                <SocialShare
                    ref="socialShare"
                    styles={this.props.styles}
                    shareOptions={this.props.appDataShareOptions}
                    shareImageBase64={this.props.appDataShareImageBase64}
                />

                {/*sliders list*/}
                {this.prepItemSliders() ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {this.prepItemSliders()}
                        titleCap = {this.titleCap}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.savedCollModalActive)}
                        confirmSupportObj={confirmSupportObj}
                    />:null}

                <ButtonCust
                    title = "home"
                    styleBox= {this.props.styles.buttonModalSave}
                    styleTitle={this.props.styles.buttonTitleModalSave}
                    onButtonPress={this.onPressHome}
                    enabled={true}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSelectStandard: state.userReducers.userSelectData.standard,
        savedCollModalActive: state.userReducers.userSelectData.savedCollModal,
        appDataSavedColl: state.appReducers.appData.savedAppColl,
        appDataDoneBtnText: state.appReducers.appData.appText.doneBtnText,
        appDataDeleteCollConfirmText: state.appReducers.appData.appText.appDataDeleteCollConfirmText,
        appDataCancelDeleteCollConfirmText: state.appReducers.appData.appText.appDataCancelDeleteCollConfirmText,
        userDataSavedColl: state.userReducers.userSavedColl,
        appDataShareOptions: state.appReducers.appData.shareOptions,
        appDataShareImageBase64: state.appReducers.appData.shareImageBase64,
    }
};

export default connect(mapStateToProps)(SavedCollectionsView) //connect wrapper - also provides dispatcher