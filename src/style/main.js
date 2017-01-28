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
    },

    modalText:{
       fontSize:15,
       paddingTop:10,
       color:"#777777",
    },

    modalSpecialIconsShell:{
        alignSelf: "stretch",
        backgroundColor:"#2b2b2b",
        marginTop:15,
        padding:15,
    },

    modalStatsShell:{
        alignSelf: "stretch",
        backgroundColor:"#2b2b2b",
        marginTop:15,
        padding:15,
        zIndex:30
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
        bottom:-5,
        right:5,
        zIndex:10
    },

    specialSelectorIconFavoredOn:{
        position:"absolute",
        width:37,
        height:34,
        top:-45,
        right:5,
        zIndex:10
    },

    specialSelectorIconFavoredItemOn:{
        position:"absolute",
        width:37,
        height:34,
        top:15,
        left:5,
        zIndex:10
    },

    specialSelectorIconModalFavoredOn:{
        width:37,
        height:34,
        marginTop:-10
    },

    specialSelectorIconModalShare:{
        width:37,
        height:34,
        marginTop:-10
    },

    specialSelectorIconModalDelete:{
        width:37,
        height:34,
        marginTop:-10
    },

    specialSelectorIconRecommended:{
        position:"absolute",
        width:37,
        height:34,
        top:-45,
        left:5,
        zIndex:10
    },

    specialSelectorIconInc:{
        position:"absolute",
        width:37,
        height:34,
        top:-50,
        right:5,
        zIndex:10
    },

    specialSelectorIconDec:{
        position:"absolute",
        width:37,
        height:34,
        top:-32,
        right:5,
        zIndex:10
    },

    specialSelectorIconShare:{
        position:"absolute",
        width:37,
        height:34,
        top:-45,
        right:5,
        zIndex:10
    },

    specialSelectorIconDelete:{
        position:"absolute",
        width:37,
        height:34,
        bottom:0,
        right:0,
        zIndex:10
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

    buttonModalNext: {
        padding:15,
        borderRadius: 15,
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a",
        width:100,
        height:20,
        zIndex:10,
    },

    buttonTitleModalNext:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    },

    buttonModalSave: {
        padding:15,
        borderRadius: 15,
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a",
        width:100,
        height:20,
        zIndex:10,
    },

    buttonTitleModalSave:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    },

    buttonCollectionSaveSave: {
        padding:15,
        borderRadius: 10,
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a",
        width:200,
        height:20,
        zIndex:10,
    },

    buttonTitleCollectionSave:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    },

    buttonCatSave: {
        padding:15,
        borderRadius: 10,
        backgroundColor:"#7eaa4d",
        borderWidth:1,
        borderColor:"#41552a",
        width:200,
        height:20,
        zIndex:10,
    },

    buttonTitleCatSave:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    },

    // task confirm

    deleteCollConfirmCont:{
        position:"absolute",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:150,
        padding:20,
    },

    deleteCollConfirmMessageBox:{
        width:70,
        height:30,
        backgroundColor:"#676654"
    },

    deleteCollConfirmMessage:{
        marginTop:-10,
        fontSize:15,
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    },

    deleteCollConfirmCancelBox:{
        width:70,
        height:30,
        backgroundColor:"#416721"
    },

    deleteCollConfirmCancel:{
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
        opacity:0.3,
        width:168,
        height:112
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
    },

    // items view
    itemViewHeader: {
        flex:0.1,
        color:"gray",
        marginTop:80,
        //backgroundColor:"red"
    },

    itemViewUserItemsText:{
        flex:0.1,
        color:"green",
    },

    itemViewItemBlock:{
        width:168,
        height:112,
        borderWidth:1,
        borderColor:"#878787"
    },

    itemViewItemBlockSelected:{
        width:168,
        height:112,
        borderWidth:2,
        borderColor:"#208731"
    },

    itemViewItemBlockImg:{
        opacity:0.3
    },

    itemViewItemBlockText:{
        color:"red",
        marginTop:-30,
        zIndex:10
    },

    itemModalShell:{
        padding:30,
        backgroundColor:"#000",
        marginTop:22
    },

    itemModalViewImg:{
        marginBottom:15,
        width:215,
        height:215,
    },

    //stats view

    statsViewText:{
        color:"#fff",
        fontSize:10,
        fontWeight:"bold",
        marginTop:0
    },

    //collection display view

    collectionItemDisplayBlock:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:22,
        padding:20,
    },

    collectionItemDisplayAmountText:{
        color:"#fff",
        fontSize:13
    },

    collectionItemDisplayTitleText:{
        color:"#7eaa4d",
        fontSize:13
    },

    collectionItemDisplayIcon:{
        width:50,
        height:50,
        marginLeft:10,
        marginRight:10,
    },

    // save coll view
    saveCollViewShell:{
        flex:1,
        marginTop:22,
        backgroundColor:"#000"
    },

    saveCollectionViewInputText:{
        fontSize:15,
        height:40,
        width:200,
        color:"#000",
        backgroundColor:"#fff"
    },

    saveCollCatInputText:{
        fontSize:15,
        height:40,
        width:200,
        color:"#000",
        backgroundColor:"#fff"
    },

    saveCollCatText:{
        fontSize:15,
        height:40,
        width:200,
        color:"#000",
        backgroundColor:"#f6ae23"
    },

    saveCollInputCont:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:22,
        padding:20,
    },

    saveCatPicker:{
        //flex:1,
        width:300,
        height:50,
        backgroundColor:"#fff"
    },

    //Saved Coll View
    savedCollViewHeader: {
        flex:0.1,
        color:"gray",
        marginTop:80,
        //backgroundColor:"red"
    },

    appCollModalHeader: {
        //flex:0.1,
        color:"gray",
        marginTop:80,
        fontSize:20
    },
});
