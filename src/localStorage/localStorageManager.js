import {AsyncStorage} from 'react-native';
appData = require ('./initJSON');

export function updateLocalStorage(key,data){
    AsyncStorage.setItem(key,data);
}

export function getFromLocalStorage(key){
    AsyncStorage.getItem(key, (err, result) => {
        if (result) return result;
        else {
            console.log(">>>>>>>>>>> Local item not found...");
            return false;
        }
    });
}

export function getInitData(){
    console.log(">>>>> getting init JSON ...");
    return appData;
}
