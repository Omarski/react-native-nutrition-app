
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';


class CustomView extends React.Component{

    render(){
        return (
            <View style={this.props.styles.centerXY}>
                <Text>This is the Custom View</Text>
            </View>
        )
    }
}

//what props needed
const mapStateToProps = (state) => {
    return {
        appData: state.appReducers.appData
    }
};

export default connect(mapStateToProps)(CustomView) //connect wrapper - also provides dispatcher