
const defaultStore = {
    appData:{userInit:false}
};

export default function appReducers(state=defaultStore, action){

    switch(action.type){

        case "LOAD_DATA_SUCCESS":
            if (action.data){
                return Object.assign({},state,{"appData":{"userInit":action.data}});
            }else {
                return state;
            }
            break;

        default: return state;
    }
}