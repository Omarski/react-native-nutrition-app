
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class SelectionSliderListView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        slidersColl: PropTypes.array,
    };

    slidersListRender = () => {
        return (
            <Text>Rendered icons...</Text>
        )
    };

    render() {

        return (
            <View>
                {this.slidersListRender()}
            </View>
        )
    }
}