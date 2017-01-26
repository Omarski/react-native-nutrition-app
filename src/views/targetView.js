
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
import CustomView from './customView';
import ButtonCust from '../viewCommon/buttonCust';
import {addTargetAction, updateTargetObjAction, removeTargetAction, updatePrefsTargetAction, itemsRecommendCheckAction, targetModalVisibilityAction} from '../actions/actions';
import TargetModalContentView from './targetModalContentView';

class TargetView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        appTargetsData:PropTypes.array.isRequired,
        targetPageHeader:PropTypes.string.isRequired,
        userSelectTargets:PropTypes.array,
        userSelectItems:PropTypes.array,
        appDataItems:PropTypes.array,
    };

    prepTargetSliders = () => {

        return categorise(this.props.appTargetsData,"category");
    };

    prepSpecialIconsColl = () => {

        return [
            {   id:"favoured",
                imgSrcOn:{uri:"specialSelectorIconFavoredOn"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconFavoredOn,
                styleOff:null,
                onPressIcon:this.onPressIconFavoured,
                showIcon:()=>true
            },

            {   id:"options",
                imgSrcOn:{uri:"specialSelectorIconOptions"},
                imgSrcOff:null,
                styleOn:this.props.styles.specialSelectorIconOptions,
                styleOff:null,
                onPressIcon:this.onPressIconOptions,
                showIcon:()=>true
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

    onPressIconFavoured = (targetObj) => {

        if (targetObj.favoured) {
            this.props.dispatch(updateTargetObjAction(targetObj,"favoured",false));
            this.props.dispatch(updatePrefsTargetAction(targetObj,"targetsPrefsFavoured","favoured",false));
        }else{
            this.props.dispatch(updateTargetObjAction(targetObj,"favoured",true));
            this.props.dispatch(updatePrefsTargetAction(targetObj,"targetsPrefsFavoured","favoured",true));
        }
    };

    onPressBlock = (targetObj) => {

        if (targetObj.selected){
            this.props.dispatch(removeTargetAction(targetObj));
            this.props.dispatch(updateTargetObjAction(targetObj,"selected",false));
            setTimeout(()=>{this.props.dispatch(itemsRecommendCheckAction(this.props.userSelectTargets,this.props.appDataItems))},200);
        }else {
            this.props.dispatch(addTargetAction(targetObj));
            this.props.dispatch(updateTargetObjAction(targetObj,"selected",true));
            setTimeout(()=>{this.props.dispatch(itemsRecommendCheckAction(this.props.userSelectTargets,this.props.appDataItems))},200);
        }
    };

    onPressIconOptions = (targetObj) => {

        this.prepModalData(targetObj);
        this.props.dispatch(targetModalVisibilityAction(targetObj,true));
    };

    onPressNextBtn = () => {

        this.props.navigator.push(
            {title:"Smoothie maker",
             component:CustomView,
             passProps: {styles:this.props.styles}
            });
    };

    prepModalData = (targetObj) => {

        if (targetObj){
            return {
                animationType:"fade",
                modalVisible:!!this.props.targetModalActive,
                transparent:false,
                content: this.prepModalContent(targetObj)
            }
        } else return null;
    };

    prepModalContent = (targetObj) => {
        return(<TargetModalContentView
            styles = {this.props.styles}
            targetObj={targetObj}
            specialSelectorIconsColl = {this.prepSpecialModalIconsColl()}
            onPressClose={this.onModalClose}
        />)
    };

    onModalClose = (targetObj) => {
        this.props.dispatch(targetModalVisibilityAction(targetObj,false));
    };

    renderTargetTitles = () => {

        let targetHeadText = "";
        for (let i = 0 ; i < this.props.userSelectTargets.length; i++){
            targetHeadText+= ", " + this.props.userSelectTargets[i].title;
       }

       return targetHeadText;
    };

    render() {

        return (
                <View style={{flex:1}}>
                    {/*page header*/}
                    <Text style={[this.props.styles.pageHeader, this.props.styles.targetViewHeader]}>
                        {this.props.targetPageHeader}
                    </Text>

                    {/*user selections*/}
                    {this.props.userSelectTargets ? <Text style={this.props.styles.targetViewUserTargetsText}>
                        {this.renderTargetTitles()}
                    </Text>:null}

                    {/*sliders list*/}
                    {this.prepTargetSliders() ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {this.prepTargetSliders()}
                        titleCap = {null}
                        onPressBlock={this.onPressBlock}
                        specialSelectorIconsColl={this.prepSpecialIconsColl()}
                        modal={this.prepModalData(this.props.targetModalActive)}
                        />:null}

                    <ButtonCust
                        title = "Next"
                        styleBox= {this.props.styles.buttonModalNext}
                        styleTitle={this.props.styles.buttonTitleModalNext}
                        onButtonPress={this.onPressNextBtn}
                        enabled={this.props.userSelectTargets.length > 0}
                        styleDisabled = {{opacity:0.5}}
                    />
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appTargetsData: state.appReducers.appData.appTargets,
        targetPageHeader: state.appReducers.appData.appText.targetPageHeader,
        userSelectTargets: state.userReducers.userSelectData.targets,
        appDataItems: state.appReducers.appData.appItems,
        userSelectItems: state.userReducers.userSelectData.items,
        targetModalActive: state.userReducers.userSelectData.targetModal
    }
};

export default connect(mapStateToProps)(TargetView) //connect wrapper - also provides dispatcher