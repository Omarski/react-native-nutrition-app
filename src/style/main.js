import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    //common
    centerXY:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    //splash loader
    loaderArt: {

    },

    //splash view
    splashBlock:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"#000",
        borderBottomWidth:2
    },

    splashBlockImage:{
        flex:1,
        padding:20
    },

    splashBlockText:{
        flex:1,
        fontSize:20,
        padding:20
    }
});