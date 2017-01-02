
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import SelectionSliderView from './selectionSliderView';
import ModalView from '../viewCommon/modalView';

export default class SelectionSliderListView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        //{"category":[{},{}.{}], "category2":[{},{}.{}}
        slidersColl: PropTypes.object.isRequired,
        userData: PropTypes.array.isRequired,
        onPressBlock: PropTypes.func.isRequired,
        specialSelectorIconsColl: PropTypes.array,
        modal:PropTypes.object
    };

    slidersListRender = () => {

        const view = Object.keys(this.props.slidersColl).map((category,index) => {

            return (
                        <View key={index}>
                            <Text>{category}</Text>
                            <SelectionSliderView
                                styles = {this.props.styles}
                                sliderItems = {this.props.slidersColl[category]}
                                userData = {this.props.userData}
                                onPressBlock = {this.props.onPressBlock}
                                specialSelectorIconsColl={this.props.specialSelectorIconsColl}
                            />
                        </View>
                    )
        });

        return view;
    };

    render() {

        return (
            <View style={{flex:1}}>
            <ScrollView>
                {this.slidersListRender()}
            </ScrollView>
                {this.props.modal ?
                    <ModalView
                        content = {this.props.modal.content}
                        animationType = {this.props.modal.animationType}
                        modalVisible = {this.props.modal.modalVisible}
                        transparent = {this.props.modal.transparent}
                    />:null}
           </View>
        )
    }
}