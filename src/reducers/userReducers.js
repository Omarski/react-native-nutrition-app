
const defaultStore = {
    userInfo: {
        userName: 'Omar',
        userAge: 23
    },
    userSelectData:{
        targets:[]
    }
};

export default function userReducers(state=defaultStore, action){
    switch(action.type){

        case "ADD_TARGET_SELECTION":
            return Object.assign({},state,{userSelectData:{targets:[...state.userSelectData.targets,action.payload.targetObj]}});
            break;

        case "REMOVE_TARGET_SELECTION":
            return Object.assign({},state,{userSelectData:{targets:state.userSelectData.targets.filter((targetObj)=>targetObj.id !== action.payload.targetObj.id)}});
            break;

        default: return state;

    }
}
