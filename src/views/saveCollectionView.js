
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TextInput
} from 'react-native';

import {updateLocalStorage, getFromLocalStorage} from '../localStorage/localStorageManager';
import CollectionDisplayView from './collectionDisplayView';
import StatsTrackerView from './statsTrackerView';
import SavedCollectionsView from './savedCollectionsView';
import ButtonCust from '../viewCommon/buttonCust';
import ModalView from '../viewCommon/modalView';
import SocialShare from '../viewCommon/socialShare';
import PickerCust from '../viewCommon/pickerCust';
import {saveCollectionAction, resetCustomProcessAction, resetAppSessionAction} from '../actions/actions';


export default class SaveCollectionView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        navigator: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectTargets:PropTypes.array.isRequired,
        userSelectStandard:PropTypes.string.isRequired,
        appDataSaveInputText:PropTypes.string.isRequired,
        appDataSaveBtnText:PropTypes.string.isRequired,
        appDataShareBtnText:PropTypes.string.isRequired,
        appDataSaveCollCatInputText:PropTypes.string.isRequired,
        appDataShareOptions:PropTypes.object,
        appDataShareImageBase64:PropTypes.object,
        appDataSaveCat:PropTypes.array.isRequired,
        appDataSavedViewHeader:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };

    state = {
        inputTextVerified:false,
        inputPickerVerified:false,
        catPickerInputText:this.props.appDataSaveCollCatInputText,
        pickerModalVisible:false
    };

    onPressSave = () => {

        this.props.dispatch(saveCollectionAction(
            this.refs.saveTitleText._lastNativeText,
            this.state.catPickerInputText,
            this.props.userSelectItems));

        //local storage
        getFromLocalStorage("userLocalData").then((userLocalData)=>{
            const userLocalDataObj = JSON.parse(userLocalData);
            const collObj = {
                title:this.refs.saveTitleText._lastNativeText,
                id:this.refs.saveTitleText._lastNativeText,
                category:this.state.catPickerInputText,
                itemsColl:this.props.userSelectItems
        };
            const updatedObj = {...userLocalDataObj,userSavedColl:[...userLocalDataObj.userSavedColl,collObj]};

            updateLocalStorage("userLocalData",JSON.stringify(updatedObj));
        });

        setTimeout(()=>{

            //reset user selections
            this.props.dispatch(resetCustomProcessAction());
            this.props.dispatch(resetAppSessionAction());

            this.props.navigator.push(
               {
                   title: "My recipes",
                   component: SavedCollectionsView,
                   passProps: {
                       styles:this.props.styles,
                       appDataSavedViewHeader:this.props.appDataSavedViewHeader,
                       savedCollSource:"user",
                       titleCap:this.props.titleCap,
                   }
            })
        },1000);
    };

    onPressCatSave = () => {
        this.setState({pickerModalVisible:false});
    };

    prepCategoryPicker = () => {
        return(
            <View style = {{flex:1}}>
                <View style={this.props.styles.saveCollViewCatPickerCont}>
                    <Text style={this.props.styles.saveCollCatInputText}>
                        {this.state.catPickerInputText}
                    </Text>
                    <ButtonCust
                        title = {this.props.appDataSaveCatBtnTitle}
                        styleBox= {this.props.styles.buttonCatSave}
                        styleTitle={this.props.styles.buttonTitleCatSave}
                        onButtonPress={this.onPressCatSave}
                        enabled={this.state.inputPickerVerified}
                        styleDisabled = {{opacity:0.5}}
                    />
                </View>
                    <PickerCust pickerStyle={this.props.styles.saveCatPicker}
                                ref="inputCategory"
                                itemsColl={this.props.appDataSaveCat}
                                selectedValue={this.props.appDataSaveCat[0].label}
                                onValueChange={this.inputPickerVerify}
                    />
            </View>
        )
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

    saveTitleInputTextVerify = (text) => {
        this.setState({inputTextVerified:text.length > 0 && text !== this.props.appDataSaveInputText});
    };

    catInputTextVerify = (text) => {
        this.setState({catInputTextVerified:text.length > 0 && text !== this.props.appDataSaveCollCatInputText,
            catPickerInputText:text});
    };

    inputPickerVerify = (text) => {
        this.setState({inputPickerVerified:text.length > 0,
            catPickerInputText:text});
    };

    render() {

        return (
            <View style={this.props.styles.saveCollViewShell}>
                <SocialShare
                    ref="socialShare"
                    styles={this.props.styles}
                    shareOptions={this.props.appDataShareOptions}
                    shareImageBase64={this.props.appDataShareImageBase64}
                />
                <ModalView
                    styles = {this.props.styles}
                    content = {this.prepCategoryPicker()}
                    animationType = "fade"
                    modalVisible = {this.state.pickerModalVisible}
                    transparent = {false}
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
                    userSelectStandard={this.props.userSelectStandard}
                />
                <View style={this.props.styles.saveCollInputCont}>
                    <TextInput
                        ref="saveTitleText"
                        style={this.props.styles.saveCollectionViewInputText}
                        placeholder={this.props.appDataSaveInputText}
                        onChangeText={(text) => this.saveTitleInputTextVerify(text)}
                    />
                    <Text
                        style={this.props.styles.saveCollCatText}
                        onPress={()=>this.setState({pickerModalVisible:true})}>
                        {this.state.catPickerInputText}
                    </Text>
                </View>
                <ButtonCust
                    title = {this.props.appDataSaveBtnText}
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressSave}
                    enabled={this.state.inputTextVerified && this.state.inputPickerVerified}
                    styleDisabled = {{opacity:0.5}}
                />
                <ButtonCust
                    title = {this.props.appDataShareBtnText}
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressSimpleShare}
                    enabled={this.state.inputTextVerified}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        )
    }
}