
import React from 'react';
import {
    NavigatorIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {NavigatorIOS} from 'react-router';
import {connect} from 'react-redux';

import MySceneView from '../views//mySceneView';

import {getUserAction, getAppDataAction} from '../actions/actions';


class LayoutView extends React.Component{

    componentWillMount(){
        getAppDataAction(this.props.dispatch);
    }

    render(){
        return (
            <NavigatorIOS
                initialRoute={{
                    title:"",
                    component:MySceneView,
                    passProps: { appData: this.props.appData }
                }}
                style={{flex: 1}}
            >
            <View>
                <Text>User init app: {this.props.appData.userInit}</Text>

            </View>
            </NavigatorIOS>
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