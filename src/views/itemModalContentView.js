
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

export default class ItemModalContentView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        itemObj: PropTypes.object.isRequired,
        specialSelectorIconsColl: PropTypes.array,
        onPressClose: PropTypes.func.isRequired
    };

    onPressDoneBtn = () =>{
        this.props.onPressClose(this.props.itemObj);
    };

    render() {

        const itemObj = this.props.itemObj;
        const sourceName = "imageModal"+capFirstLetter(itemObj.id);

        return (

            <View style={this.props.styles.modalShell}>
                <Image
                    source= {{uri:sourceName}}
                    style = {this.props.styles.itemModalViewImg}
                />
                <Text style={this.props.styles.modalHeader}>
                    {itemObj.title}
                </Text>
                <Text style={this.props.styles.modalText}>
                    {itemObj.modalSummary}
                </Text>
                {this.props.specialSelectorIconsColl ?
                    <View style = {this.props.styles.modalSpecialIconsShell}>
                        <SpecialSelectorIconsView
                            specialSelectorIconsColl = {this.props.specialSelectorIconsColl}
                            selectObj = {this.props.itemObj}
                        /></View>:null}
                <ButtonCust
                    title = "Done"
                    styleBox= {this.props.styles.buttonModalNext}
                    styleTitle={this.props.styles.buttonTitleModalNext}
                    onButtonPress={this.onPressDoneBtn}
                />
            </View>
        );
    }
}