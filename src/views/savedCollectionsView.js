
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {updateLocalStorage, getFromLocalStorage} from '../localStorage/localStorageManager';
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
        appDataSavedViewHeader:PropTypes.string,
        sampleCollViewHeader:PropTypes.string,
        savedCollSource:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };

    state = {
        visibleCancelTaskColl:[],
        modalConfirmVisible:false
    };

    prepItemSliders = () => {
        let sliders = this.props.savedCollSource === "user" ?
        categorise(this.props.userDataSavedColl,"category"):
        categorise(this.props.appDataSavedColl,"category");
        console.log("sliders coll <><><><><><><><><><><> source " + this.props.savedCollSource);
        console.log("coll  user" + this.props.userDataSavedColl);
        console.log("coll  sample" + this.props.appDataSavedColl);
        console.dir(sliders);
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

    // Delete coll task confirms

    onPressIconDelete = (collObj) => {

        if (this.state.visibleCancelTaskColl.indexOf(collObj.id) === -1){
            this.setState({visibleCancelTaskColl:[...this.state.visibleCancelTaskColl,collObj.id]});
        }
    };

    modalDeleteConfirmVisible = () => {
        this.setState({modalConfirmVisible:!this.state.modalConfirmVisible});
    };

    onConfirmDeleteColl = (collId) => {
        this.props.dispatch(deleteUserSavedCollAction(collId));

        //local storage
        getFromLocalStorage("userLocalData").then((userLocalData)=>{
            const userLocalDataObj = JSON.parse(userLocalData);
            const updatedObj = {...userLocalDataObj,userSavedColl:userLocalDataObj.userSavedColl.filter((savedColl)=>{
                    return savedColl.id !== collId;
                }
            )};

            updateLocalStorage("userLocalData",JSON.stringify(updatedObj));
        });
    };

    onConfirmModalDeleteColl = (collId) => {
        this.props.dispatch(deleteUserSavedCollAction(collId));
        this.modalDeleteConfirmVisible();
    };

    onConfirmCancel = (collId) => {
        this.setState({visibleCancelTaskColl:this.state.visibleCancelTaskColl.filter((collIdStack)=> {
            return collIdStack !== collId;
        })});
    };

    onConfirmVisible = (collId) => {
        return this.state.visibleCancelTaskColl.indexOf(collId) !== -1;
    };

    onModalConfirmVisible = () => {return this.state.modalConfirmVisible};

    onPressHome = () => {
    };

    prepSpecialIconsColl = () => {

        if (this.props.savedCollSource === "user") {return [
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
        ]} else return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
                showIcon:()=>true
            }
        ]
    };

    prepSpecialModalIconsColl = () => {

        if (this.props.savedCollSource === "user") {return [
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
                onPressIcon:this.modalDeleteConfirmVisible,
                showIcon:()=>true
            }
        ]} else return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconModalShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
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
            confirmSupportObj = {this.confirmSupportModalObj}
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

    confirmSupportObj = {
        message: this.props.appDataDeleteCollConfirmText,
        cancelMessage: this.props.appDataCancelDeleteCollConfirmText,
        confirmContStyle: this.props.styles.deleteCollConfirmCont,
        styleMessageBox: this.props.styles.deleteCollConfirmMessageBox,
        styleMessage: this.props.styles.deleteCollConfirmMessage,
        styleCancelBox: this.props.styles.deleteCollConfirmCancelBox,
        styleCancel: this.props.styles.deleteCollConfirmCancel,
        visible:this.onConfirmVisible,
        onConfirmPress:this.onConfirmDeleteColl,
        onConfirmCancel:this.onConfirmCancel
    };

    confirmSupportModalObj = Object.assign({},this.confirmSupportObj,{
        visible:this.onModalConfirmVisible,
        onConfirmPress:this.onConfirmModalDeleteColl,
        onConfirmCancel:this.modalDeleteConfirmVisible
    });

    render() {

        const preppedSliders = this.prepItemSliders();

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
                {preppedSliders ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {preppedSliders}
                        titleCap = {this.titleCap}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.savedCollModalActive)}
                        confirmSupportObj={this.confirmSupportObj}
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
        userSelectStandard: state.userReducers.userSettings.standard,
        savedCollModalActive: state.userReducers.userSelectData.savedCollModal,
        userSavedCollDelConfirmsVis: state.userReducers.userSelectData.userSavedCollDelConfirmsVis,
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