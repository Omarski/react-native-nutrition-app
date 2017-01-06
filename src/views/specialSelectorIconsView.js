
import React, {PropTypes} from 'react';
import {View} from 'react-native';
import SpecialIconView from './specialIconView';

export default class SpecialSelectorIconsView extends React.Component {

    static propTypes = {
        specialSelectorIconsColl: PropTypes.array,
        selectObj: PropTypes.object.isRequired
    };

    specialIconsRender = () => {
        const renderedIconsColl =  this.props.specialSelectorIconsColl.map((iconObj,index) => {

            if (iconObj.showIcon && iconObj.showIcon(this.props.selectObj)) {
                return (
                    <SpecialIconView key={index}
                                     iconObj={iconObj}
                                     selectObj={this.props.selectObj}
                    />
                )
            }
        });

        return renderedIconsColl;
    };

    render() {

        return (
           <View>
               {this.specialIconsRender()}
           </View>
        )
    }
}