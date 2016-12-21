
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class SpecialSelectorIconsView extends React.Component {

    static propTypes = {
        //styles: PropTypes.object.isRequired,
        specialSelectorColl: PropTypes.array,
    };

    specialIconsRender = () => {
        return (
            <Text>Rendered icons...</Text>
        )
    };

    render() {

        return (
           <View>
               {this.specialIconsRender()}
           </View>
        )
    }
}