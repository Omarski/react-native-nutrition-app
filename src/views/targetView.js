
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

    onPressBlock = (blockRef) => {
        console.log("Pressed ...");
    };

    render() {

        return (
                <View style={{flex:1}}>
                    {/*page header*/}
                    <Text style={[this.props.styles.pageHeader, this.props.styles.targetViewHeader]}>
                        {this.props.targetPageHeader}
                    </Text>
                    {/*user selections*/}
                    <Text style={this.props.styles.targetViewUserTargetsText}>
                        {this.props.userSelectData}
                    </Text>
                    {/*sliders list*/}
                    {this.prepTargetSliders() ? <SelectionSliderListView
                        styles = {this.props.styles}
                        slidersColl = {this.prepTargetSliders()}
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