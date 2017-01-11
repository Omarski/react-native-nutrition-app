
import React, {PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

import CollectionItemDisplayView from './collectionItemDisplayView';

export default class CollectionDisplayView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectStandard:PropTypes.string.isRequired,
    };

    render() {

        const collectionItemsDisplay = this.props.userSelectItems.map((itemObj,index)=>{
            return (
                <CollectionItemDisplayView key={index}
                    styles = {this.props.styles}
                    itemObj = {itemObj}
                    userSelectionStandard = {this.props.userSelectStandard}
                />
            )
        });

        return (
            <View style={{flex:1}}>
                {collectionItemsDisplay}
            </View>

        )
    }
}