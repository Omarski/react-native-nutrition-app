
const defaultStore = {
    appData:{},
    appDataLoaded:false,
};

export default function appReducers(state=defaultStore, action){

    switch(action.type){

        case "LOAD_DATA_SUCCESS":
            if (action.data){
                return Object.assign({},state,{"appData":action.data, "appDataLoaded":true});
            }else {
                return state;
            }
            break;

        case "LOCAL_DATA_SUCCESS": case "INIT_DATA_SUCCESS":

            return Object.assign({},state,{"appData":action.data, "appDataLoaded":true});
            break;

        case "UPDATE_TARGET_OBJECT":
            return Object.assign({},state,{appData:{...state.appData, appTargets:state.appData.appTargets.map((obj) => {
                if (obj.id === action.payload.targetObj.id) obj[action.payload.key] = action.payload.value;
                return obj;
            })}});
            break;

        case "UPDATE_ITEM_OBJECT":
            return Object.assign({},state,{appData:{...state.appData, appItems:state.appData.appItems.map((obj) => {
                if (obj.id === action.payload.itemObj.id) obj[action.payload.key] = action.payload.value;
                return obj;
            })}});
            break;

        default: return state;
    }
}