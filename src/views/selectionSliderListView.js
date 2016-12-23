
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import SelectionSliderView from './selectionSliderView';

export default class SelectionSliderListView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        //{"category":[{},{}.{}], "category2":[{},{}.{}}
        slidersColl: PropTypes.object.isRequired,
        onPressBlock: PropTypes.func.isRequired,
    };

    slidersListRender = () => {

        const view = Object.keys(this.props.slidersColl).map((category,index) => {

            console.log("..................... slider items array");
            console.log("category: " + category);
            console.dir(this.props.slidersColl[category]);
            return (
                <View key={index}>
                    <Text>{this.props.slidersColl[category].category}</Text>
                    <SelectionSliderView
                        styles = {this.props.styles}
                        sliderItems = {this.props.slidersColl[category]}
                        onPressBlock = {this.props.onPressBlock}
                    />
                </View>
                    )
        });

        return view;
    };

    render() {

        return (
            <ScrollView>
                {this.slidersListRender()}
            </ScrollView>
        )
    }
}