
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
        selectObj: PropTypes.object.isRequired,
        blockStyle: PropTypes.number,
        blockStyleSelected: PropTypes.number,
        titleCap: PropTypes.func,
        imageSrc: PropTypes.object.isRequired,
        imgStyle: PropTypes.number,
        blockTitle: PropTypes.string.isRequired,
        blockTextStyle: PropTypes.number,
        blockId:PropTypes.string.isRequired,
        onPressBlock: PropTypes.func.isRequired,
        specialSelectorIconsColl: PropTypes.array
    };

    render() {

        return (
            <TouchableHighlight style={{flex:1}}
                                onPress={() => {this.props.onPressBlock(this.props.selectObj);}}
            >
                <View style={this.props.selectObj.selected ? this.props.blockStyleSelected:this.props.blockStyle}>

                    <Image source={this.props.imageSrc}
                           style={this.props.imgStyle}
                    />

                    <Text style={this.props.blockTextStyle}>
                        {this.props.blockTitle}{this.props.titleCap ? this.props.titleCap(this.props.selectObj):""}
                    </Text>

                    {this.props.specialSelectorIconsColl ?
                        <SpecialSelectorIconsView
                            specialSelectorIconsColl = {this.props.specialSelectorIconsColl}
                            selectObj = {this.props.selectObj}
                        />:null}

                </View>
            </TouchableHighlight>

        )
    }
}