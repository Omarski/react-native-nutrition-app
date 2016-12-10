
const defaultStore = {
    appData:{userInit:false, appDataLoaded:false}
};

export default function appReducers(state=defaultStore, action){

    switch(action.type){

        case "LOAD_DATA_SUCCESS":
            if (action.data){
                return Object.assign({},state,{"appData":action.data});
            }else {
                return state;
            }
            break;

        case "LOCAL_DATA_SUCCESS": case "INIT_DATA_SUCCESS":

            return Object.assign({},state,{"appData":action.data});

            break;

        default: return state;
    }
}