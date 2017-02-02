import {updateLocalStorage, getFromLocalStorage, getInitData} from '../localStorage/localStorageManager'


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


//database connect
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

//local storage integrate
export function getLocalDataAction(userDataObj) {
    return {
        type: "GET_LOCAL_DATA",
        payload: {userDataObj:userDataObj}
    }
}