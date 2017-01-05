
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
import ButtonCust from '../viewCommon/buttonCust';
import {addItemAction, updateItemObjAction, removeItemAction, updatePrefsItemAction, itemModalVisibilityAction} from '../actions/actions';
import ItemModalContentView from './itemModalContentView';

class CustomView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        appItemsData:PropTypes.array.isRequired,
        itemPageHeader:PropTypes.string.isRequired,
        userSelectItems:PropTypes.array,
    };

    prepItemSliders = () => {

        return categorise(this.props.appItemsData,"category");
    };

    prepSpecialIconsColl = () => {

        return [
            {   id:"favoured",
                imgSrcOn:require("../../images/specialSelectorIconFavoredOn.png"),
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconFavoredOn,
                styleOff:null,
                onPressIcon:this.onPressIconFavoured,
                showIcon:true
            },

            {   id:"options",
                imgSrcOn:require("../../images/specialSelectorIconOptions.png"),
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconOptions,
                styleOff:null,
                onPressIcon:this.onPressIconOptions,
                showIcon:true
            }
        ]
    };

    prepSpecialModalIconsColl = () => {

        return [
            {   id:"favoured",
                imgSrcOn:require("../../images/specialSelectorIconModalFavoredOn.png"),
                imgSrcOff:require("../../images/specialSelectorIconModalFavoredOff.png"),
                styleOn:this.props.styles.specialSelectorIconModalFavoredOn,
                styleOff:null,
                onPressIcon:this.onPressIconFavoured,
                showIcon:true
            }
        ]
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

    onPressNextBtn = () => {

        // this.props.navigator.push(
        //     {title:"My recipes",
        //         component:CollectionsView,
        //         passProps: {styles:this.props.styles}
        //     });
    };

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

    renderItemTitles = () => {

        let itemHeadText = "";
        for (let i = 0 ; i < this.props.userSelectItems.length; i++){
            itemHeadText+= ", " + this.props.userSelectItems[i].title;
        }

        return itemHeadText;
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
                        userData = {this.props.userSelectItems}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.itemModalActive)}
                    />:null}
                <ButtonCust
                    title = "Next"
                    styleBox= {this.props.styles.buttonModalNext}
                    styleTitle={this.props.styles.buttonTitleModalNext}
                    onButtonPress={this.onPressNextBtn}
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
        itemModalActive: state.userReducers.userSelectData.itemModal
    }
};

export default connect(mapStateToProps)(CustomView) //connect wrapper - also provides dispatcher