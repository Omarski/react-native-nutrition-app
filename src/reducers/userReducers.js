
const defaultStore = {
    userInfo: {
        userName: 'Omar',
        userAge: 23
    },
    userSelectData:{
        standard:"st",
        targets:[],
        items:[],
        targetModal:null,
        itemModal:null,
        savedCollModal:null,
        targetsPrefsFavoured:[],
        itemsPrefsFavoured:[]
        },
    userSavedColl:[]
};

export default function userReducers(state=defaultStore, action){
    switch(action.type){

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
                return Object.assign({},state,{userSavedColl:[...state.userSavedColl,
                    state.userSavedColl.filter((savedCollObj)=>{
                        return savedCollObj.title !== action.savedCollObj.title
                    })]});
            break;

        default: return state;

    }
}
