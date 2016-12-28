
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

        case "getUser":
            return state;
            break;

        case "addTarget":
            //return Object.assign({},state,{userSelectData:{targets:[...state.userSelectData.targets,action.payload.targetObj]}});
            return Object.assign({},state,{userSelectData:{targets:[...state.userSelectData.targets,action.payload.targetObj]}});
            break;

        default: return state;

    }
}
