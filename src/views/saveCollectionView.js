
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TextInput
} from 'react-native';

import CollectionDisplayView from './collectionDisplayView';
import StatsTrackerView from './statsTrackerView';
import ButtonCust from '../viewCommon/buttonCust';


export default class SaveCollectionView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectTargets:PropTypes.array.isRequired,
        userSelectStandard:PropTypes.string.isRequired,
        appDataSaveInputText:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };

    onPressSave = () => {
        console.log(this.refs.inputTxt._lastNativeText);
    };

    inputVerify = () => {
        return this.refs.inputTxt._lastNativeText.length > 0 && this.refs.inputTxt._lastNativeText !== this.props.appDataSaveInputText;
    };

    render() {

        return (
            <View style={this.props.styles.saveCollViewShell}>
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
                    ref={"inputTxt"}
                    style={this.props.styles.saveCollectionViewInputText}
                    placeholder={this.props.appDataSaveInputText}
                    onChangeText={(inputText) => this.setState({inputText})}
                />
                <ButtonCust
                    title = "Save collection"
                    styleBox= {this.props.styles.buttonCollectionSaveSave}
                    styleTitle={this.props.styles.buttonTitleCollectionSave}
                    onButtonPress={this.onPressSave}
                    enabled={this.inputVerify()}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        )
    }
}