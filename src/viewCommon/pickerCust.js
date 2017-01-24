import React, {PropTypes} from 'react';
import {Picker, View} from 'react-native';

export default class PickerCust extends React.component {

    propTypes = {
        styles:PropTypes.object.isRequired,
        itemsColl:PropTypes.array.isRequired,
        defaultValue:PropTypes.string,
        onValueChange:PropTypes.func,
    };

    prepPicker = () => {
        const itemsRender = this.props.itemsColl.map((item, index)=>{
            return (<Picker.item label=item.label value=item.value />)
        });

        return itemsRender;
    };

    render() {

        return(
            <View style={this.props.styles.pickerCust}>
                <Picker
                    selectedValue={this.props.defaultValue}
                    onValueChange={(val)=>this.props.onValueChange(val)}>
                    {this.prepPicker()}
                </Picker>
            </View>
        )
    }
}