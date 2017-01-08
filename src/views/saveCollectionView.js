
import React, {PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

export default class SaveCollectionView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectTargets:PropTypes.array.isRequired,
    };

    render() {

        return (
            <View style={{flex:1, marginTop:22}}>
                <Text>The save coll page ...</Text>
            </View>

        )
    }
}