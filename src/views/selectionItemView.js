
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import SpecialSelectorIconsView from './specialSelectorIconsView';

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

    render() {

        return (
            <TouchableHighlight style={{flex:1}}
                                onPress={() => {this.props.onPressBlock(this.props.targetObj);}}
            >
                <View style={this.props.targetObj.selected ? this.props.blockStyleSelected:this.props.blockStyle}>

                    <Image source={this.props.imageSrc}
                           style={this.props.imgStyle}
                    />

                    <Text style={this.props.blockTextStyle}>
                        {this.props.blockTitle}
                    </Text>

                    {this.props.specialSelectorColl ?
                        <SpecialSelectorIconsView specialSelectorColl = {this.props.specialSelectorColl} />:null}

                </View>
            </TouchableHighlight>

        )
    }
}