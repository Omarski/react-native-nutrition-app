
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

            //console.dir(Object.assign({},state,{"appData":action.data, "appDataLoaded":true}));
            return Object.assign({},state,{"appData":action.data, "appDataLoaded":true});

            break;

        default: return state;
    }
}