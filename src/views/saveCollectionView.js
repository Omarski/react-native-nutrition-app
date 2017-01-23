
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TextInput
} from 'react-native';

import CollectionDisplayView from './collectionDisplayView';
import StatsTrackerView from './statsTrackerView';
import MyCollectionsView from './savedCollectionsView';
import ButtonCust from '../viewCommon/buttonCust';
import SocialShare from '../viewCommon/socialShare';
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
        appDataShareOptions:PropTypes.object,
        appDataShareImageBase64:PropTypes.object,
        titleCap:PropTypes.func,
    };

    state = {
        inputVerified:false,
    };

    onPressSave = () => {

        if (this.inputVerify) this.props.dispatch(saveCollectionAction(this.refs.inputText._lastNativeText,
            this.props.userSelectItems));

        setTimeout(()=>{
           this.props.navigator.push(
               {
                   title: "My recipes",
                   component: MyCollectionsView,
                   passProps: {styles:this.props.styles}
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

    inputVerify = (text) => {
        this.setState({inputVerified:text.length > 0 && text !== this.props.appDataSaveInputText,
        textValue:text});
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
                    userSelectTargets={this.props.userSelectTargets}
                    userSelectStandard={this.props.userSelectStandard}
                />
                <TextInput
                    ref="inputText"
                    style={this.props.styles.saveCollectionViewInputText}
                    placeholder={this.props.appDataSaveInputText}
                    onChangeText={(text) => this.inputVerify(text)}
                />
                <ButtonCust
                    title = {this.props.appDataSaveBtnText}
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressSave}
                    enabled={this.state.inputVerified}
                    styleDisabled = {{opacity:0.5}}
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
        )
    }
}