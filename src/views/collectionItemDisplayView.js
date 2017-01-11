
import React, {PropTypes} from 'react';

import {
    Text,
    Image,
    View
} from 'react-native';

export default class CollectionItemDisplayView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        itemObj:PropTypes.object.isRequired,
        userSelectionStandard:PropTypes.string.isRequired,
    };
    render() {

        const itemObj = this.props.itemObj;
        const itemObjMeasurement = itemObj.measurement[this.props.userSelectionStandard];
        const iconSrc = itemObjMeasurement.icon;
        return (
            <View style={this.props.styles.collectionItemDisplayBlock}>
                <Text style={this.props.styles.collectionItemDisplayAmountText}>
                    {itemObjMeasurement.current}
                </Text>
                <Image
                    source={{uri:iconSrc}}
                    style={this.props.styles.collectionItemDisplayIcon}
                />
                <Text style={this.props.styles.collectionItemDisplayTitleText}>
                    {itemObj.title}
                </Text>
            </View>

        )
    }
}