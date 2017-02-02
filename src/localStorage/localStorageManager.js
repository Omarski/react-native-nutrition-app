import {AsyncStorage} from 'react-native';
appData = require ('./initJSON');


export function setDefaultLocalStorage(){
    AsyncStorage.setItem("userLocalData", JSON.stringify({

        userSettings: {
                standard: "st",
                language: "en"
        },
        userSelectData:{
                targetsPrefsFavoured:[],
                itemsPrefsFavoured:[]
            },
            userSavedColl:[]
        }),
        ()=>{(getFromLocalStorage("userLocalData").then((obj)=>console.log(JSON.parse(obj).userSettings.standard)))}
    );
}

export function updateLocalStorage(key,data){
    AsyncStorage.setItem(key,data);
}

//returns a promise
export function getFromLocalStorage(key){
    return AsyncStorage.getItem(key,(err,result) => {});
}

export function getInitData(){
    console.log(">>>>> getting init JSON ...");
    return appData;
}
