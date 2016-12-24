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
       fontSize:20
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
        color:"gray"
    },

    targetViewUserTargetsText:{
        color:"green"
    },

    targetViewItemBlock:{
        width:168,
        height:112,
        borderWidth:1,
        borderColor:"#878787"
    },

    targetViewItemBlockImg:{
        opacity:0.2
    },

    targetViewItemBlockText:{
        fontSize:12
    }

});