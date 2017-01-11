
import React, {PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

import CollectionDisplayView from './collectionDisplayView';

export default class SaveCollectionView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectTargets:PropTypes.array.isRequired,
        userSelectionStandard:PropTypes.string.isRequired,
    };

    render() {

        return (
            <View style={{flex:1, marginTop:22}}>
                <CollectionDisplayView
                    styles={this.props.styles}
                    userSelectItems={this.props.userSelectItems}
                    userSelectStandard={this.props.userSelectionStandard}
                />
            </View>

        )
    }
}