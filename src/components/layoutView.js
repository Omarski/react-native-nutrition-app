
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import {Link, Match} from 'react-router';
import {connect} from 'react-redux';

import PreferencesView from './preferencesView';

import {getUserAction, getAppDataAction} from '../actions/actions';


class LayoutView extends React.Component{

    componentWillMount(){
        //this.props.dispatch(getUserAction());
        getAppDataAction(this.props.dispatch);
    }

    render(){
        return (
            <View>
                <Text>User init app: {this.props.appData.userInit}</Text>

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

export default connect(mapStateToProps)(LayoutView) //connect wrapper - also provides dispatcher