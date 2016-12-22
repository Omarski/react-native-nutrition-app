
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

        case "updateTargets":
            return state;
            break;

        default: return state;

    }
}
