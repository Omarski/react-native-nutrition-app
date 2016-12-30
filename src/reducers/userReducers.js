
const defaultStore = {
    userInfo: {
        userName: 'Omar',
        userAge: 23
    },
    userSelectData:{
        targets:[],
        targetsPrefsFavoured:[]
        }
};

export default function userReducers(state=defaultStore, action){
    switch(action.type){

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

        default: return state;

    }
}
