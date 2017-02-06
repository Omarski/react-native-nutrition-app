
import React, {PropTypes} from 'react';

import {
    View, Text, TouchableHighlight
} from 'react-native';
import {getFromLocalStorage,updateLocalStorage} from '../localStorage/localStorageManager';
import {changeSettingPref} from '../actions/actions';

import {connect} from 'react-redux';
import ButtonCust from '../viewCommon/buttonCust';

class PreferencesView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        styles:PropTypes.object.isRequired
    };

    onPressDoneBtn = ()=>{

    };

    changeSetting = (setting,value)=>{
        this.props.dispatch(changeSettingPref(setting,value));
        getFromLocalStorage("userLocalData").then((userLocalData) =>{
            const userLocalDataObj = JSON.parse(userLocalData);
            updateLocalStorage("userLocalData",JSON.stringify({...userLocalDataObj,userSettings:{...userLocalDataObj.userSettings,[setting]:value}}));
        });
    };

    render() {

        return (
            <View style={this.props.styles.prefsBlockCont}>
                <View style = {this.props.styles.optionBlock}>
                    <TouchableHighlight onPress={()=>this.changeSetting("standard","st")}>
                        <Text>Standard</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.changeSetting("standard","mt")}>
                        <Text>Metric</Text>
                    </TouchableHighlight>
                </View>
                    <ButtonCust
                        title = "Done"
                        styleBox= {this.props.styles.buttonModalNext}
                        styleTitle={this.props.styles.buttonTitleModalNext}
                        enabled = {true}
                        onButtonPress={this.onPressDoneBtn}
                    />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSettings: state.userReducers.userSettings,
    }
};
export default connect(mapStateToProps)(PreferencesView) //connect wrapper - also provides dispatcher