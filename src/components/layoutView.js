
import React from 'react';
import {
    NavigatorIOS
} from 'react-native';

import {connect} from 'react-redux';

import MySceneView from '../views/mySceneView';

import {getAppDataAction} from '../actions/actions';


class LayoutView extends React.Component{

    componentWillMount(){
        //getAppDataAction(this.props.dispatch);
    }

    render(){
        return (
            <NavigatorIOS
                initialRoute={{
                    title:"My Scene",
                    component:MySceneView,
                    passProps: { appData: this.props.appData }
                }}
                style={{flex: 1}}
            />
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