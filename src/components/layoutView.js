
import React from 'react';
import {
    NavigatorIOS
} from 'react-native';

import store from '../store';
import MySceneView from '../views/mySceneView';
import {getAppDataAction, getLocalDataAction} from '../actions/actions';
import {getFromLocalStorage, setDefaultLocalStorage} from '../localStorage/localStorageManager'


export default class LayoutView extends React.Component{

    componentWillMount(){

        //remove
        //setDefaultLocalStorage();
        getAppDataAction(store.dispatch);

        getFromLocalStorage("appUserData").then((obj)=>{
            if (obj){
                console.log("oooooooooo found local user data...");
                store.dispatch(getLocalDataAction(getFromLocalStorage("appUserData")));
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
                }}
                style={{flex: 1}}
            />
        )
    }
}