import React, {PropTypes} from 'react';
import {Picker, View} from 'react-native';

export default class PickerCust extends React.Component {

    static propTypes = {
        pickerStyle:PropTypes.number.isRequired,
        itemsColl:PropTypes.array.isRequired,
        selectedValue:PropTypes.string,
        onValueChange:PropTypes.func,
    };

    prepPicker = () => {
        const PickerItem = Picker.Item;
        const itemsRender = this.props.itemsColl.map((item, index)=>{
            return (<PickerItem label={item.label} value={item.value} key={index}/>)
        });

        return itemsRender;
    };

    render() {

        return(
            <View>
                <Picker
                    style={this.props.pickerStyle}
                    selectedValue={this.props.selectedValue}
                    onValueChange={(val)=>this.props.onValueChange(val)}>
                    {this.prepPicker()}
                </Picker>
            </View>
        )
    }
}