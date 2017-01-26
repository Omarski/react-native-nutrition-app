
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TextInput
} from 'react-native';

import CollectionDisplayView from './collectionDisplayView';
import StatsTrackerView from './statsTrackerView';
import SavedCollectionsView from './savedCollectionsView';
import ButtonCust from '../viewCommon/buttonCust';
import SocialShare from '../viewCommon/socialShare';
import PickerCust from '../viewCommon/pickerCust';

import {saveCollectionAction} from '../actions/actions';


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
        appDataPickerSaveCatText:PropTypes.string.isRequired,
        appDataShareOptions:PropTypes.object,
        appDataShareImageBase64:PropTypes.object,
        appDataSaveCat:PropTypes.array.isRequired,
        appDataSavedViewHeader:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };

    state = {
        inputTextVerified:false,
        inputPickerVerified:false,
        pickerInputText:""
    };

    onPressSave = () => {

        this.props.dispatch(saveCollectionAction(
            this.refs.inputText._lastNativeText,
            this.state.pickerInputText,
            this.props.userSelectItems));

        setTimeout(()=>{

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

    onPressSimpleShare = () => {
        this.refs.socialShare.openSimpleShare();
    };

    onPressImage64Share = () => {
        this.refs.socialShare.openSimpleImage64Share();
    };

    onPressUIShare = () => {
        this.refs.socialShare.openUIComponentShare();
    };

    inputTextVerify = (text) => {
        this.setState({inputTextVerified:text.length > 0 && text !== this.props.appDataSaveInputText});
    };

    inputPickerVerify = (text) => {
        this.setState({inputPickerVerified:text.length > 0 && text !== this.props.appDataPickerSaveCatText,
            pickerInputText:text});
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
                <TextInput
                    ref="inputText"
                    style={this.props.styles.saveCollectionViewInputText}
                    placeholder={this.props.appDataSaveInputText}
                    onChangeText={(text) => this.inputTextVerify(text)}
                />
                <PickerCust style={{flex:1}}
                    ref="inputCategory"
                    styles={this.props.styles}
                    itemsColl={this.props.appDataSaveCat}
                    selectedValue={this.props.appDataPickerSaveCatText}
                    onValueChange={this.inputPickerVerify}
                />
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