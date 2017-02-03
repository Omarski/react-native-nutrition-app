
import React from 'react';
import {
    NavigatorIOS
} from 'react-native';

import {connect} from 'react-redux';
import MySceneView from '../views/mySceneView';
import {getAppDataAction, getLocalDataAction} from '../actions/actions';
import {getFromLocalStorage, setDefaultLocalStorage} from '../localStorage/localStorageManager'


class LayoutView extends React.Component{

    componentWillMount(){

        //remove
        //setDefaultLocalStorage();
        getAppDataAction(this.props.dispatch);

        getFromLocalStorage("appUserData").then((obj)=>{
            if (obj){
                console.log("oooooooooo found local user data...");
                this.props.dispatch(getLocalDataAction(getFromLocalStorage("appUserData")));
            } else {
                console.log("oooooooooo No local user data... setting user default");
                setDefaultLocalStorage();
            }
        });
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