
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const splashBlockImages = [
    require("../../images/splashCustom.png"),
    require("../../images/splashCustom.png"),
    require("../../images/splashCustom.png")
];

export default class SplashBlockView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        onClickBlock: PropTypes.func.isRequired,
        imageIndex: PropTypes.number.isRequired,
        blockTitle: PropTypes.string.isRequired,
    };

    render() {

        return (
        <TouchableHighlight style={{flex:1}}
            onPress={() => this.props.onClickBlock(this.props.route)}
        >
            <View style={this.props.styles.splashBlock}>

                <Image source={splashBlockImages[this.props.imageIndex]}
                       style={this.props.styles.splashBlockImage}
                />
                <Text style={this.props.styles.splashBlockText}>
                    {this.props.blockTitle}
                </Text>

            </View>
        </TouchableHighlight>

        )
    }
}