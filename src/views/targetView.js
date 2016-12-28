
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
import {addTargetAction, updateTargetObjAction, removeTargetAction} from '../actions/actions';

class TargetView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        appTargetsData:PropTypes.array.isRequired,
        targetPageHeader:PropTypes.string.isRequired,
        userSelectTargets:PropTypes.array,
    };

    prepTargetSliders = () => {

        return categorise(this.props.appTargetsData,"category");
    };

    renderTargetTitles = () => {

        let targetHeadText = "";
        for (let i = 0 ; i < this.props.userSelectTargets.length; i++){
            targetHeadText+= ", " + this.props.userSelectTargets[i].title;
       }

       return targetHeadText;
    };

    onPressBlock = (targetObj,isSelected) => {
        if (isSelected){
            this.props.dispatch(removeTargetAction(targetObj));

        }else {
            this.props.dispatch(addTargetAction(targetObj));
            this.props.dispatch(updateTargetObjAction(targetObj,"selected",true));
        }
    };

    render() {

        console.log(">>>>>>00000 Updating target view: userDta:");
        console.dir(this.props.userSelectTargets);
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
                        //userData = {{selections:this.props.userSelectTargets}}
                        userData = {this.props.userSelectTargets}
                        onPressBlock={this.onPressBlock}
                    />:null}
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appTargetsData: state.appReducers.appData.appTargets,
        targetPageHeader: state.appReducers.appData.appText.targetPageHeader,
        userSelectTargets: state.userReducers.userSelectData.targets
    }
};

export default connect(mapStateToProps)(TargetView) //connect wrapper - also provides dispatcher