
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import SpecialSelectorIconsView from './specialSelectorIconsView';
import {findInObjArray} from '../js/common';

export default class SelectionItemView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        targetObj: PropTypes.object.isRequired,
        userData: PropTypes.array.isRequired,
        blockStyle: PropTypes.number,
        blockStyleSelected: PropTypes.number,
        imageSrc: PropTypes.number.isRequired,
        imgStyle: PropTypes.number,
        blockTitle: PropTypes.string.isRequired,
        blockTextStyle: PropTypes.number,
        blockId:PropTypes.string.isRequired,
        onPressBlock: PropTypes.func.isRequired,
        specialSelectorColl: PropTypes.array
    };

    checkIfSelected = () => {
        console.log(">>>> found in array : " + findInObjArray(this.props.userData, "id", this.props.blockId).length);
        // selections of target objects

        return (findInObjArray(this.props.userData, "id", this.props.blockId).length > 0);
    };

    render() {

        console.log(">>>>>>>>>>>>>> User Data");
        console.dir(this.props.userData);
        let self = this;
        return (
            <TouchableHighlight style={{flex:1}}
                                onPress={() => {self.props.onPressBlock(self.props.targetObj, this.checkIfSelected())}}
            >
                <View style={this.checkIfSelected() ? this.props.blockStyleSelected:this.props.blockStyle}>

                    <Image source={this.props.imageSrc}
                           style={this.props.imgStyle}
                    />

                    <Text style={this.props.blockTextStyle}>
                        {this.props.blockTitle}
                    </Text>

                    {this.props.specialSelectorColl ?
                        <SpecialSelectorIconsView specialSelectorColl = {this.specialSelectorColl} />:null}

                </View>
            </TouchableHighlight>

        )
    }
}