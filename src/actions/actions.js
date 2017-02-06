import {updateLocalStorage, getInitData} from '../localStorage/localStorageManager'

// global

export function resetCustomProcessAction() {
    return {
        type: "RESET_CUSTOM_PROCESS",
        payload: {}
    }
}

export function resetAppSessionAction() {
    return {
        type: "RESET_APP_SESSION",
        payload: {}
    }
}

export function resetItemSelectionsAction() {
    return {
        type: "RESET_ITEM_SELECTIONS",
        payload: {}
    }
}

export function resetUserSelectItemsAction() {
    return {
        type: "RESET_USER_SELECT_ITEMS",
        payload: {}
    }
}

//targets

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

export function updatePrefsTargetAction(targetObj,prefName,key,value){
    return {
        type:"UPDATE_PREFS_TARGET",
        payload: {
            targetObj: targetObj,
            prefName: prefName,
            key:key,
            value:value
        }
    }
}

export function targetModalVisibilityAction(targetObj,show){
    return {
        type:"UPDATE_TARGET_MODAL_VISIBLE",
        payload: {
            targetObj: targetObj,
            show: show
        }
    }
}


//Items
export function itemsRecommendCheckAction(userSelectTargets,appItems){
    return {
        type:"UPDATE_RECOMMENDED_ITEMS",
        payload: {
            userSelectTargets: userSelectTargets,
            appItems:appItems
        }
    }
}

export function updateItemObjAction(itemObj, key, value){
    return {
        type:"UPDATE_ITEM_OBJECT",
        payload: {
            itemObj: itemObj,
            key:key,
            value:value
        }
    }
}

export function addItemAction(itemObj){
    return {
        type:"ADD_ITEM_SELECTION",
        payload: {
            itemObj: itemObj
        }
    }
}

export function removeItemAction(itemObj){
    return {
        type:"REMOVE_ITEM_SELECTION",
        payload: {
            itemObj: itemObj
        }
    }
}

export function updatePrefsItemAction(itemObj,prefName,key,value){
    return {
        type:"UPDATE_PREFS_ITEM",
        payload: {
            itemObj: itemObj,
            prefName: prefName,
            key:key,
            value:value
        }
    }
}

export function itemIncrementAction(itemObj){
    return {
        type:"ITEM_INCREMENT",
        payload: {
            itemObj: itemObj
        }
    }
}

export function itemDecrementAction(itemObj){
    return {
        type:"ITEM_DECREMENT",
        payload: {
            itemObj: itemObj
        }
    }
}

export function itemModalVisibilityAction(itemObj,show){
    return {
        type:"UPDATE_ITEM_MODAL_VISIBLE",
        payload: {
            itemObj: itemObj,
            show: show
        }
    }
}

// collections
export function saveCollectionAction(collectionName,collectionCat,collItems){
    return {
        type:"SAVE_COLLECTION",
        payload: {
            collectionObj: {
                title:collectionName,
                id:collectionName,
                category:collectionCat,
                itemsColl:collItems}
        }
    }
}

export function savedCollModalVisibilityAction(collObj,show){
    return {
        type:"UPDATE_SAVED_COLL_MODAL_VISIBLE",
        payload: {
            collObj: collObj,
            show: show
        }
    }
}

export function deleteUserSavedCollAction(collTitle) {
    return {
        type: "DELETE_USER_SAVED_COLL",
        payload: {
            collTitle: collTitle
        }
    }
}

//Prefs page
export function changeSettingPref(setting,value) {
    return {
        type: "CHANGE_SETTINGS_PREFS",
        payload: {
            setting: setting,
            value: value
        }
    }
}

//Uses thunk - returns a function with chained dispatches
export function getAppAndLocalData(url,localUserObj,localAppDataObj){

    return (dispatch) => {

        fetch(url).then(
            res => res.json()).then(data =>{
            //console.log("............. result: " + data.userInit);
            //dispatch store action only after we get server result
            dispatch({ type: 'LOAD_DATA_SUCCESS', data:{data:data}});
            dispatch(getLocalDataAction(localUserObj));
            dispatch(localUpdatesAppDataAction(JSON.parse(localUserObj)));
            //update local storage here
            updateLocalStorage("appData",data);
            dispatch(localUpdatesAppDataAction(JSON.parse(localUserObj)));

    }).catch(function(error) {
        //console.log('>>>>>>>>>>>>>> There has been a problem with your fetch operation: ' + error.message);
        //load local storage here
            if (localAppDataObj){
                console.log(">>>>>>>>>>> found local data...");
                dispatch({ type: 'LOCAL_APP_DATA_SUCCESS', data:JSON.parse(localAppDataObj)});
                console.log(">>>>>>>>>>> appData success dispatched ...");
                dispatch(getLocalDataAction(JSON.parse(localUserObj)));
                console.log(">>>>>>>>>>> dispatch get user data ...");
                dispatch(localUpdatesAppDataAction(JSON.parse(localUserObj)));
                console.log(">>>>>>>>>>> dispatch local to app update ...");
            } else {
                const initialData = getInitData();
                console.log(">>>>>>>>>>> No local App data...");
                dispatch({ type: 'INIT_DATA_SUCCESS', data:initialData});
                updateLocalStorage("appData",JSON.stringify(initialData));
                // dispatch(getLocalDataAction(localUserObj));
                // dispatch(localUpdatesAppDataAction(JSON.parse(localUserObj)));
            }
        });
    }
}

//local storage integrate
export function getLocalDataAction(userDataObj) {
    return {
        type: "GET_LOCAL_DATA",
        payload: {userDataObj:userDataObj}
    }
}
export function localUpdatesAppDataAction(userDataObj) {
    return {
        type: "UPDATE_APP_WITH_LOCAL_DATA",
        payload: {userDataObj:userDataObj}
    }
}