import { StyleSheet} from "react-native";


//can define vars here ddepending on conditions to use inside styles
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
        color:"gray",
        marginTop:80
    },

    targetViewUserTargetsText:{
        flex:1,
        color:"green"
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



});