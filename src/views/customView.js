
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {categorise} from '../js/common.js';
import SelectionSliderListView from './selectionSliderListView';
import StatsTrackerView from './statsTrackerView';
import SaveCollectionView from './saveCollectionView';
import ButtonCust from '../viewCommon/buttonCust';
import ItemModalContentView from './itemModalContentView';
import {addItemAction, updateItemObjAction, removeItemAction, updatePrefsItemAction,
        itemModalVisibilityAction, itemIncrementAction, itemDecrementAction} from '../actions/actions';


class CustomView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        appItemsData:PropTypes.array.isRequired,
        itemPageHeader:PropTypes.string.isRequired,
        userSelectItems:PropTypes.array,
        appDataItems:PropTypes.array,
        userSelectTargets:PropTypes.array,
    };

    prepItemSliders = () => {

        //reorder recommended to front
        let sliders = categorise(this.props.appDataItems,"category");
        for (const category in sliders){
            sliders[category].sort(function(obj1,obj2){
                return (obj2.recommended - obj1.recommended);
            });
        }

        return sliders;
    };

    showRecommendIcon = (itemObj) => {
        return itemObj.recommended;
    };

    showFavouredIcon = (itemObj) => {
        return itemObj.favoured;
    };

    showIncrementIcon = (itemObj) => {
        return itemObj.selected;
    };

    showDecrementIcon = (itemObj) => {
        return itemObj.selected &&
               itemObj.measurement[this.props.userSelectStandard].current > itemObj.measurement[this.props.userSelectStandard].inc;
    };

    prepSpecialIconsColl = () => {

        return [
            {   id:"favoured",
                imgSrcOn:{uri:"specialSelectorIconFavoredOn"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconFavoredItemOn,
                styleOff:null,
                onPressIcon:this.onPressIconFavoured,
                showIcon:this.showFavouredIcon
            },

            {   id:"options",
                imgSrcOn:{uri:"specialSelectorIconOptions"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconOptions,
                styleOff:null,
                onPressIcon:this.onPressIconOptions,
                showIcon:()=>true
            },

            {   id:"recommended",
                imgSrcOn:{uri:"specialSelectorIconRecommend"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconRecommended,
                styleOff:null,
                onPressIcon:null,
                showIcon:this.showRecommendIcon
            },

            {   id:"increment",
                imgSrcOn:{uri:"specialSelectorIconInc"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconInc,
                styleOff:null,
                onPressIcon:this.onPressIconInc,
                showIcon:this.showIncrementIcon
            },

            {   id:"decrement",
                imgSrcOn:{uri:"specialSelectorIconDec"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconDec,
                styleOff:null,
                onPressIcon:this.onPressIconDec,
                showIcon:this.showDecrementIcon
            }
        ]
    };

    prepSpecialModalIconsColl = () => {

        return [
            {   id:"favoured",
                imgSrcOn:{uri:"specialSelectorIconModalFavoredOn"},
                imgSrcOff:{uri:"specialSelectorIconModalFavoredOff"},
                styleOn:this.props.styles.specialSelectorIconModalFavoredOn,
                styleOff:null,
                onPressIcon:this.onPressIconFavoured,
                showIcon:()=>true
            }
        ]
    };

    renderItemTitles = () => {

        let itemHeadText = "";
        for (let i = 0 ; i < this.props.userSelectItems.length; i++){
            const itemSeparator = (i == this.props.userSelectItems.length -1)? "":", ";
            itemHeadText+= this.props.userSelectItems[i].title + this.titleCap(this.props.userSelectItems[i]) + itemSeparator;
        }

        return itemHeadText;
    };

    titleCap = (itemObj,mode=null)=>{
        const itemMeasurementObj = itemObj.measurement[this.props.userSelectStandard];
        const plural = itemMeasurementObj.current > itemMeasurementObj.incDef;
        if (mode == "plain") return itemMeasurementObj.current + " " + itemMeasurementObj.title + (plural ? "s":"");
        else return " ("+itemMeasurementObj.current + itemMeasurementObj.title + (plural ? "s":"") + ")";
    };

    onPressIconFavoured = (itemObj) => {
        if (itemObj.favoured) {
            this.props.dispatch(updateItemObjAction(itemObj,"favoured",false));
            this.props.dispatch(updatePrefsItemAction(itemObj,"itemsPrefsFavoured","favoured",false));
        }else{
            this.props.dispatch(updateItemObjAction(itemObj,"favoured",true));
            this.props.dispatch(updatePrefsItemAction(itemObj,"itemsPrefsFavoured","favoured",true));
        }
    };

    onPressIconOptions = (itemObj) => {
        this.prepModalData(itemObj);
        this.props.dispatch(itemModalVisibilityAction(itemObj,true));
    };

    onPressIconInc = (itemObj) => {

        this.props.dispatch(itemIncrementAction(itemObj));
    };

    onPressIconDec = (itemObj) => {

        this.props.dispatch(itemDecrementAction(itemObj));
    };

    //modal
    prepModalData = (itemObj) => {

        if (itemObj){
            return {
                animationType:"fade",
                modalVisible:!!this.props.itemModalActive,
                transparent:false,
                content: this.prepModalContent(itemObj)
            }
        } else return null;
    };

    prepModalContent = (itemObj) => {
        return(<ItemModalContentView
            styles = {this.props.styles}
            itemObj={itemObj}
            specialSelectorIconsColl = {this.prepSpecialModalIconsColl()}
            onPressClose={this.onModalClose}
        />)
    };

    onModalClose = (itemObj) => {
        this.props.dispatch(itemModalVisibilityAction(itemObj,false));
    };

    onPressBlock = (itemObj) => {
        if (itemObj.selected){
            this.props.dispatch(removeItemAction(itemObj));
            this.props.dispatch(updateItemObjAction(itemObj,"selected",false));
        }else {
            this.props.dispatch(addItemAction(itemObj));
            this.props.dispatch(updateItemObjAction(itemObj,"selected",true));
        }
    };

    onPressSave = () => {
        this.props.navigator.push(
            {title:"My creations",
                component:SaveCollectionView,
                passProps: {
                    styles:this.props.styles,
                    dispatch:this.props.dispatch,
                    navigator:this.props.navigator,
                    userSelectItems:this.props.userSelectItems,
                    userSelectTargets:this.props.userSelectTargets,
                    userSelectStandard:this.props.userSelectStandard,
                    appDataSaveInputText:this.props.appDataSaveInputText,
                    appDataSaveBtnText:this.props.appDataSaveBtnText,
                    appDataShareBtnText:this.props.appDataShareBtnText,
                    appDataSavedViewHeader:this.props.savedCollViewHeader,
                    appDataSaveCatBtnTitle:this.props.appDataSaveCatBtnTitle,
                    appDataSaveCollCatInputText:this.props.appDataSaveCollCatInputText,
                    appDataShareOptions:this.props.appDataShareOptions,
                    appDataShareImageBase64:this.props.appDataShareImageBase64,
                    titleCap:this.titleCap,
                    appDataSaveCat:this.props.appDataSaveCat,
                }
            });
    };

    enableSaving = ()=> {
        return this.props.userSelectItems.length > 0;
    };

    render() {

        return (
            <View style={{flex:1}}>
                {/*page header*/}
                <Text style={[this.props.styles.pageHeader, this.props.styles.itemViewHeader]}>
                    {this.props.itemPageHeader}
                </Text>

                {/*user selections*/}
                {this.props.userSelectItems ? <Text style={this.props.styles.itemViewUserItemsText}>
                        {this.renderItemTitles()}
                    </Text>:null}

                {/*sliders list*/}
                {this.prepItemSliders() ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {this.prepItemSliders()}
                        titleCap = {this.titleCap}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.itemModalActive)}
                    />:null}

                <StatsTrackerView
                    styles={this.props.styles}
                    userSelectItems={this.props.userSelectItems}
                    userSelectTargets={this.props.userSelectTargets}
                    userSelectStandard={this.props.userSelectStandard}
                />
                <ButtonCust
                    title = "Save"
                    styleBox= {this.props.styles.buttonModalSave}
                    styleTitle={this.props.styles.buttonTitleModalSave}
                    onButtonPress={this.onPressSave}
                    enabled={this.enableSaving()}
                    styleDisabled = {{opacity:0.5}}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appItemsData: state.appReducers.appData.appItems,
        itemPageHeader: state.appReducers.appData.appText.customPageHeader,
        userSelectItems: state.userReducers.userSelectData.items,
        userSelectStandard: state.userReducers.userSelectData.standard,
        userSelectTargets: state.userReducers.userSelectData.targets,
        appDataItems: state.appReducers.appData.appItems,
        appDataSaveInputText: state.appReducers.appData.appText.saveCollectionDefaultText,
        appDataSaveBtnText: state.appReducers.appData.appText.saveBtnText,
        appDataShareBtnText: state.appReducers.appData.appText.shareBtnText,
        appDataSaveCollCatInputText: state.appReducers.appData.appText.saveCollCatInputText,
        appDataSaveCatBtnTitle: state.appReducers.appData.appText.doneBtnText,
        savedCollViewHeader: state.appReducers.appData.appText.savedCollViewHeader,
        itemModalActive: state.userReducers.userSelectData.itemModal,
        appDataShareOptions: state.appReducers.appData.shareOptions,
        appDataShareImageBase64: state.appReducers.appData.shareImageBase64,
        appDataSaveCat: state.appReducers.appData.saveAppCategories,
    }
};

export default connect(mapStateToProps)(CustomView) //connect wrapper - also provides dispatcher