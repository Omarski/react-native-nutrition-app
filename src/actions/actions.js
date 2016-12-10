import {updateLocalStorage, getFromLocalStorage, getInitData} from '../localStorage/localStorageManager'

export function addUserAction(user){
    return {
        type:"addUser",
        payload: {
            name: user.name,
            age: user.age
        }
    }
}

export function getAppDataAction(dispatch){

    fetch("http://localhost:3000/appData").then(
        res => res.json()).then(data =>{
        console.log("............. result: " + data.userInit);
        //dispatch store action only after we get server result
        dispatch({ type: 'LOAD_DATA_SUCCESS', data:{data:data}});
        //update local storage here
        updateLocalStorage("appData",data);

    }).catch(function(error) {
        console.log('>>>>>>>>>>>>>> There has been a problem with your fetch operation: ' + error.message);
        //load local storage here
        if (getFromLocalStorage("appData")){
            dispatch({ type: 'LOCAL_DATA_SUCCESS', data:getFromLocalStorage("appData")});
        }else{
            dispatch({ type: 'INIT_DATA_SUCCESS', data:getInitData()});
        }

    });
}

export function getUserAction(){
    return {
        type:"getUser"
    }
}