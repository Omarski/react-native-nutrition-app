
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
        blockStyle: PropTypes.number,
        imageSrc: PropTypes.number.isRequired,
        imgStyle: PropTypes.number,
        blockTitle: PropTypes.string.isRequired,
        blockTextStyle: PropTypes.number,
        blockId:PropTypes.string.isRequired,
        onPressBlock: PropTypes.func.isRequired,
        specialSelectorColl: PropTypes.array
    };

    render() {

        let self = this;
        return (
            <TouchableHighlight style={{flex:1}}
                                onPress={() => {self.props.onPressBlock(self.props.blockId)}}
            >
                <View style={this.props.blockStyle}>

                    <Image source={this.props.imageSrc}
                           style={this.props.imgStyle}
                    />

                    <Text style={{color:"red","marginTop":-30,zIndex:10}}>
                        {this.props.blockTitle}
                    </Text>


                    {this.props.specialSelectorColl ?
                        <SpecialSelectorIconsView specialSelectorColl = {this.specialSelectorColl} />:null}

                </View>
            </TouchableHighlight>

        )
    }
}