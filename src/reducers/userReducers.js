
const defaultStore = {
    userSettings: {
        standard: "st",
        language: "en"
    },
    userSelectData:{
        targets:[],
        items:[],
        targetModal:null,
        itemModal:null,
        savedCollModal:null,
        targetsPrefsFavoured:[],
        itemsPrefsFavoured:[]
        },
    userSavedColl:[],
};

export default function userReducers(state=defaultStore, action){
    switch(action.type){

        //local storage integrate
        case "GET_LOCAL_DATA":
            return Object.assign({},state,
                {
                    userSettings:  {...state.userSettings,
                        standard:action.payload.userDataObj.userSettings.standard,
                        language:action.payload.userDataObj.userSettings.language},
                    userSelectData: {...state.userSelectData,
                        targetsPrefsFavoured:action.payload.userDataObj.userSelectData.targetsPrefsFavoured ? action.payload.userDataObj.userSelectData.targetsPrefsFavoured:[],
                        itemsPrefsFavoured:action.payload.userDataObj.userSelectData.itemsPrefsFavoured ? action.payload.userDataObj.userSelectData.itemsPrefsFavoured:[]},
                    userSavedColl:action.payload.userDataObj.userSavedColl ? action.payload.userDataObj.userSavedColl:[]
                });

        break;

        //global
        case "RESET_CUSTOM_PROCESS":
            return Object.assign({},state,
                {userSelectData:{...state.userSelectData,
                    targets:[],
                    items:[]
            }});
        break;

        case "RESET_USER_SELECT_ITEMS":
            return Object.assign({},state,
                {userSelectData:{...state.userSelectData,
                    items:[]
            }});
        break;

        //prefs
        case "CHANGE_SETTINGS_PREFS":
            return Object.assign({},state,
                {
                    userSettings: {...state.userSettings, [action.payload.setting]: action.payload.value
                    }});
            break;

        //targets

        case "ADD_TARGET_SELECTION":
            return Object.assign({},state,{userSelectData:{...state.userSelectData, targets:[...state.userSelectData.targets,action.payload.targetObj]}});
            break;

        case "REMOVE_TARGET_SELECTION":
            return Object.assign({},state,{userSelectData:{...state.userSelectData, targets:state.userSelectData.targets.filter((targetObj)=>targetObj.id !== action.payload.targetObj.id)}});
            break;

        case "UPDATE_PREFS_TARGET":
            if (action.payload.value === true){ //off
                return Object.assign({},state,{userSelectData:{...state.userSelectData,[action.payload.prefName]:[...state.userSelectData[action.payload.prefName],action.payload.targetObj.id]}});
            }else{
                return Object.assign({},state,{userSelectData:{...state.userSelectData,[action.payload.prefName]:state.userSelectData[action.payload.prefName].filter((targetId)=>targetId !== action.payload.targetObj.id)}});
            }
            break;

        case "UPDATE_TARGET_MODAL_VISIBLE":
            if (action.payload.show){
                return Object.assign({},state,{userSelectData:{...state.userSelectData, targetModal:action.payload.targetObj}});
            }else{
                return Object.assign({},state,{userSelectData:{...state.userSelectData, targetModal:null}});
            }
            break;

        //items

        case "ADD_ITEM_SELECTION":
            return Object.assign({},state,{userSelectData:{...state.userSelectData, items:[...state.userSelectData.items,action.payload.itemObj]}});
            break;

        case "REMOVE_ITEM_SELECTION":
            return Object.assign({},state,{userSelectData:{...state.userSelectData, items:state.userSelectData.items.filter((itemObj)=>itemObj.id !== action.payload.itemObj.id)}});
            break;

        case "UPDATE_PREFS_ITEM":
            if (action.payload.value === true){ //off
                return Object.assign({},state,{userSelectData:{...state.userSelectData,[action.payload.prefName]:[...state.userSelectData[action.payload.prefName],action.payload.itemObj.id]}});
            }else{
                return Object.assign({},state,{userSelectData:{...state.userSelectData,[action.payload.prefName]:state.userSelectData[action.payload.prefName].filter((itemId)=>itemId !== action.payload.itemObj.id)}});
            }
            break;

        case "UPDATE_ITEM_MODAL_VISIBLE":
            if (action.payload.show){
                return Object.assign({},state,{userSelectData:{...state.userSelectData, itemModal:action.payload.itemObj}});
            }else{
                return Object.assign({},state,{userSelectData:{...state.userSelectData, itemModal:null}});
            }
            break;

        // collections

        case "SAVE_COLLECTION":
                return Object.assign({},state,{userSavedColl:[...state.userSavedColl,action.payload.collectionObj]});
            break;

        case "UPDATE_SAVED_COLL_MODAL_VISIBLE":
            if (action.payload.show){
                return Object.assign({},state,{userSelectData:{...state.userSelectData, savedCollModal:action.payload.collObj}});
            }else{
                return Object.assign({},state,{userSelectData:{...state.userSelectData, savedCollModal:null}});
            }
            break;

         case "DELETE_USER_SAVED_COLL":
                return Object.assign({},state,{userSavedColl:
                    state.userSavedColl.filter((savedCollObj)=>{
                        return savedCollObj.title !== action.payload.collTitle
                    })});
            break;

        default: return state;

    }
}
