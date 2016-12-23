
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
        blockStyle: PropTypes.string,
        imageSrc: PropTypes.object.isRequired,
        imgStyle: PropTypes.object,
        blockTitle: PropTypes.string.isRequired,
        blockId:PropTypes.string.isRequired,
        onPressBlock: PropTypes.func.isRequired,
        specialSelectorColl: PropTypes.array,
    };

    render() {

        return (
            <TouchableHighlight style={{flex:1}}
                                onPress={() => this.props.onClickBlock(this.props.blockId)}
            >
                <View style={this.props.blockStyle}>

                    <Image source={this.props.imageSrc}
                           style={this.props.imgStyle}
                    />
                    <Text style={this.props.styles.selectionItemBlockText}>
                        {this.props.blockTitle}
                    </Text>

                    {this.props.specialSelectorColl ?
                        <SpecialSelectorIconsView specialSelectorColl = {this.specialSelectorColl} />:null}
                    />

                </View>
            </TouchableHighlight>

        )
    }
}