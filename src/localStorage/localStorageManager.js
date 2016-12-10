import {AsyncStorage} from 'react-native';
import {initJSON} from ',/initJSON';

export function updateLocalStorage(key,data){
    AsyncStorage.setItem(key,data);
}

export function getFromLocalStorage(key){
    AsyncStorage.getItem(key, (err, result) => {
        if (result) return result;
        else {
            console.log("Local item not found...");
            return false;
        }
    });
}

export function getInitData(){
    return initJSON.appData;
}
