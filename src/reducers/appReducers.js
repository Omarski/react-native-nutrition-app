
const defaultStore = {
    appData:{},
    appDataLoaded:false,
};

export default function appReducers(state=defaultStore, action){

    switch(action.type){

        //global
        case "RESET_APP_SESSION":
                return Object.assign({},state,{"appData":{...state.appData,
                    appTargets:state.appData.appTargets.map((targetObj)=>{targetObj.selected=false; return targetObj}),
                    appItems:state.appData.appItems.map((itemObj)=>{itemObj.selected=false; itemObj.recommended=false; return itemObj})
                }});
            break;

        case "RESET_ITEM_SELECTIONS":
                return Object.assign({},state,{"appData":{...state.appData,
                    appItems:state.appData.appItems.map((itemObj)=>{itemObj.selected=false; return itemObj})
                }});
            break;

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

        case "UPDATE_RECOMMENDED_ITEMS":
            let userTargetIds = [];
            for (let t = 0; t < action.payload.userSelectTargets.length; t++) userTargetIds.push(action.payload.userSelectTargets[t].id);
            return Object.assign({},state,{appData:{...state.appData, appItems:state.appData.appItems.map((itemObj) => {
                for (let i = 0 ; i < userTargetIds.length; i++) {
                    if (itemObj.target.indexOf(userTargetIds[i]) !== -1) return {...itemObj,recommended:true}
                } return itemObj;

            })}});
            break;

        case "ITEM_INCREMENT":
            return Object.assign({},state,{appData:{...state.appData, appItems:state.appData.appItems.map((obj) => {
                if (obj.id === action.payload.itemObj.id) {
                    obj.measurement.st.current += obj.measurement.st.inc;
                    obj.measurement.mt.current += obj.measurement.mt.inc;
                }
                return obj;
            })}});
            break;

        case "ITEM_DECREMENT":
            return Object.assign({},state,{appData:{...state.appData, appItems:state.appData.appItems.map((obj) => {
                if (obj.id === action.payload.itemObj.id) {
                    obj.measurement.st.current -= obj.measurement.st.inc;
                    obj.measurement.mt.current -= obj.measurement.mt.inc;
                }
                return obj;
            })}});
            break;


        default: return state;
    }
}