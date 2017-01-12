
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
        userSelectStandard:PropTypes.string.isRequired,
        titleCap:PropTypes.func,
    };
    render() {

        const itemObj = this.props.itemObj;
        const itemObjMeasurement = itemObj.measurement[this.props.userSelectStandard];
        const iconSrc = itemObjMeasurement.icon;

        return (
            <View style={this.props.styles.collectionItemDisplayBlock}>
                <Text style={this.props.styles.collectionItemDisplayAmountText}>
                    {this.props.titleCap(this.props.itemObj,"plain")}
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