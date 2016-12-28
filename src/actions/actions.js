import {updateLocalStorage, getFromLocalStorage, getInitData} from '../localStorage/localStorageManager'

export function updateTargetObjAction(targetObj, key, value){
    return {
        type:"UPDATE_TARGET_OBJECT",
        payload: {
            targetObj: targetObj,
            key:key,
            value:value
        }
    }
}

export function addTargetAction(targetObj){
    return {
        type:"ADD_TARGET_SELECTION",
        payload: {
            targetObj: targetObj
        }
    }
}

export function removeTargetAction(targetObj){
    return {
        type:"REMOVE_TARGET_SELECTION",
        payload: {
            targetObj: targetObj
        }
    }
}

export function getAppDataAction(dispatch){

    fetch("http://localhost:3000/appData").then(
        res => res.json()).then(data =>{
        //console.log("............. result: " + data.userInit);
        //dispatch store action only after we get server result
        dispatch({ type: 'LOAD_DATA_SUCCESS', data:{data:data}});
        //update local storage here
        updateLocalStorage("appData",data);

    }).catch(function(error) {
        //console.log('>>>>>>>>>>>>>> There has been a problem with your fetch operation: ' + error.message);
        //load local storage here
        if (getFromLocalStorage("appData")){
            //console.log(">>>>>>>>>>> found local data...");
            dispatch({ type: 'LOCAL_DATA_SUCCESS', data:getFromLocalStorage("appData")});
        }else{
            //console.log(">>>>>>>>>>> No local data...");
            dispatch({ type: 'INIT_DATA_SUCCESS', data:getInitData()});
        }

    });
}

export function getUserAction(){
    return {
        type:"getUser"
    }
}