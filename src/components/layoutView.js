
import React from 'react';
import {
    NavigatorIOS
} from 'react-native';

import store from '../store';
import MySceneView from '../views/mySceneView';
import {getAppAndLocalData} from '../actions/actions';
import {getFromLocalStorage, setDefaultLocalStorage} from '../localStorage/localStorageManager'


export default class LayoutView extends React.Component{

    componentWillMount(){

        //remove - resets all data.
        //setDefaultLocalStorage();

        getFromLocalStorage("userLocalData").then((localUserObj)=>{
            if (localUserObj){
                console.log("oooooooooo found local user data...");
            } else {
                console.log("oooooooooo No local user data... setting user default");
                setDefaultLocalStorage();
            }

            getFromLocalStorage("appData").then((localAppDataObj) =>{
                store.dispatch(getAppAndLocalData("http://www.bluegravitymedia.com/smoothieboost/appData.json",localUserObj,localAppDataObj));
            });
        });
    };

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