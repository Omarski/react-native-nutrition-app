import { StyleSheet} from "react-native";

//can define vars here depending on conditions to use inside styles

const extend = (from,add) => {
    return Object.assign({},styles[from],add);
};

export const styles = StyleSheet.create({

    //common
    centerXY:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    pageHeader:{
       flex:1,
       fontSize:15
    },

     modalHeader:{
       fontSize:15,
       color:"#777777"
    },

    modalText:{
       fontSize:12,
       color:"#777777"
    },

    slidersTitles:{
       color:"#000",
        fontSize:15
    },

    //splash loader
    loaderArt: {
        flex:1,
        resizeMode:"center"
    },

    //icons
    specialSelectorIconOptions:{
        position:"absolute",
        width:35,
        height:36,
        bottom:-10,
        right:5,
        zIndex:10
    },

    specialSelectorIconFavoredOn:{
        position:"absolute",
        width:37,
        height:34,
        top:-95,
        right:5,
        zIndex:10
    },

    specialSelectorIconModalFavoredOn:{
        position:"absolute",
        width:37,
        height:34,
        top:0,
        left:5
    },



    // buttons

    buttonBox:{
        borderRadius: 64,
    },

    buttonModalDone: extend("buttonBox",{
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a"
    }),

    buttonTitleModalDone:{
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"
    },

    //page views

    //splash view
    splashBlockCont:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center",
    },

    splashBlock:{
        flex:1,
        //flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"gray",
        // borderBottomColor:"green",
        // borderBottomWidth:2,

        //height:300
    },

    splashBlockImage:{
        flex:1,
        resizeMode:"contain",
        backgroundColor:"blue",
        //width:300,
        //height:300
        //resizeMode:"contain",
        //padding:0
    },

    splashBlockText:{
        flex:.5,
        color:"#fff",
        //flexDirection: "column",
        flexWrap: 'wrap',
        marginTop:-200,
        fontSize:20,
        //height:200,
        //backgroundColor:"red",
        backgroundColor:'rgba(52,52,52,0)',
      // width:300
        borderWidth:2,
        borderColor:"red"
    },

    //Target View
    targetViewHeader: {
        flex:0.1,
        color:"gray",
        marginTop:80,
        //backgroundColor:"red"
    },

    targetViewUserTargetsText:{
        flex:0.1,
        color:"green",
        //backgroundColor:"yellow"
    },

    targetViewItemBlock:{
        width:168,
        height:112,
        borderWidth:1,
        borderColor:"#878787"
    },

    targetViewItemBlockSelected:{
        width:168,
        height:112,
        borderWidth:2,
        borderColor:"#208731"
    },

    targetViewItemBlockImg:{
        opacity:0.3
    },

    targetViewItemBlockText:{
        color:"red",
        marginTop:-30,
        zIndex:10
    },

    targetModalViewImg:{
        borderColor:"#000",
        borderWidth:2,
        width:215,
        height:215
    },



});