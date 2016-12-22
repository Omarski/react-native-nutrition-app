
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
        //{"category":[{},{}.{}], "category2":[{},{}.{}}
        slidersColl: PropTypes.object,
    };

    slidersListRender = () => {

        const slidersColl = [];
        const view = Object.keys(this.props.slidersColl).map((key,index) => {
            return (
                <View key={index}>
                    <Text>{this.props.slidersColl.key.category}</Text>
                    <SelectionSliderView selections = {this.props.slidersColl.key} />
                </View>
                    )
        });

        return view;
    };

    render() {

        return (
            <View>
                {this.slidersListRender()}
            </View>
        )
    }
}