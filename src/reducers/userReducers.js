
const defaultStore = {
    userName: 'Omar',
    userAge: 23
};

export default function userReducers(state=defaultStore, action){
    switch(action.type){

        case "getUser":
            return state;
            break;

        default: return state;

    }
}
