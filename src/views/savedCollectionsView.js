
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
import SavedCollModalContentView from './savedCollModalContentView';

import {savedCollModalVisibilityAction} from '../actions/actions';


class SavedCollectionsView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        savedCollectionsPageHeader:PropTypes.string.isRequired,
        userSavedColl:PropTypes.array,
    };

    prepItemSliders = () => {

        let sliders = categorise(this.props.userSavedColl,"category");
        return sliders;
    };

    onPressSimpleShare = () => {
        this.refs.socialShare.openSimpleShare();
    };

    onPressImage64Share = () => {
        this.refs.socialShare.openSimpleImage64Share();
    };

    onPressUIShare = () => {
        this.refs.socialShare.openUIComponentShare();
    };

    onPressIconDelete = () => {
    };


    prepSpecialIconsColl = () => {

        return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
                showIcon:()=>true
            },

            {   id:"delete",
                imgSrcOn:{uri:"specialSelectorIconDelete.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconDelete,
                styleOff:null,
                onPressIcon:this.onPressIconDelete,
                showIcon:()=>true
            },
        ]
    };

    prepSpecialModalIconsColl = () => {

        return [
            {   id:"share",
                imgSrcOn:{uri:"specialSelectorIconShare.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconModalShare,
                styleOff:null,
                onPressIcon:this.onPressSimpleShare,
                showIcon:()=>true
            },
            {   id:"delete",
                imgSrcOn:{uri:"specialSelectorIconDelete.png"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconModalDelete,
                styleOff:null,
                onPressIcon:this.onPressIconDelete,
                showIcon:()=>true
            }
        ]
    };

    //modal
    prepModalData = (myCollObj) => {

        if (myCollObj){
            return {
                animationType:"fade",
                modalVisible:!!this.props.savedCollModalActive,
                transparent:false,
                content: this.prepModalContent(myCollObj)
            }
        } else return null;
    };

    prepModalContent = (savedCollObj) => {
        return(<SavedCollModalContentView
            styles = {this.props.styles}
            savedCollObj={savedCollObj}
            specialSelectorIconsColl = {this.prepSpecialModalIconsColl()}
            onPressClose={this.onModalClose}
        />)
    };

    onModalClose = (savedCollObj) => {
        this.props.dispatch(savedCollModalVisibilityAction(savedCollObj,false));
    };

    onPressBlock = (savedCollObj) => {
        this.prepModalData(savedCollObj);
        this.props.dispatch(savedCollModalVisibilityAction(savedCollObj,true));
    };

    render() {

        return (
            <View style={{flex:1}}>
                {/*page header*/}
                <Text style={[this.props.styles.pageHeader, this.props.styles.savedCollViewHeader]}>
                    {this.props.itemPageHeader}
                </Text>

                {/*sliders list*/}
                {this.prepItemSliders() ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {this.prepItemSliders()}
                        userData = {this.props.userSelectItems}
                        titleCap = {this.titleCap}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.myCollModalActive)}
                    />:null}

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
        myCollectionsPageHeader: state.appReducers.appData.appText.myCollectionsPageHeader,
        userSelectStandard: state.userReducers.userSelectData.standard,
        savedCollModalActive: state.userReducers.userSelectData.savedCollModal,
        appDataShareOptions: state.appReducers.appData.shareOptions,
        appDataShareImageBase64: state.appReducers.appData.shareImageBase64,
    }
};

export default connect(mapStateToProps)(SavedCollectionsView) //connect wrapper - also provides dispatcher