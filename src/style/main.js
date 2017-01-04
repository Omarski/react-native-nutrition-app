import { StyleSheet} from "react-native";

//can define vars here depending on conditions to use inside styles

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

     modalShell:{
        flex: 1,
        padding:15,
        paddingTop:0,
        backgroundColor:"#000",
        justifyContent: 'center',
        alignItems: 'center',
    },

     modalHeader:{
        fontSize:20,
        color:"#777777",
        backgroundColor:"green"
    },

    modalText:{
       fontSize:15,
       paddingTop:10,
       color:"#777777",
        backgroundColor:"red"
    },

    modalSpecialIconsShell:{
        backgroundColor:"#5d5d5d",
        marginTop:15,
        padding:30,
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
        bottom:10,
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
        //position:"absolute",
        width:37,
        height:34,
        marginTop:-10
        //top:0,
        //left:5
    },



    // buttons

    buttonBox:{
        borderRadius: 64,
    },

    buttonModalDone: {
        padding:15,
        borderRadius: 15,
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a",
        width:100,
        height:20,
        zIndex:10,
    },

    buttonTitleModalDone:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
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

    targetModalShell:{
        padding:30,
        backgroundColor:"#000",
        marginTop:22
    },

    targetModalViewImg:{
        marginBottom:15,
        width:215,
        height:215,
        backgroundColor:"#fff"
    },

});

// const extend = (from,add) => {
//     return Object.assign({},styles[from],add);
// };