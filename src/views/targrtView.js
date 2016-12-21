
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import SelectionSliderListView from './selectionSliderListView';
class TargetView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    prepTargetSliders = () => {

    };

    render() {

        return (
                <View style={{flex:1}}>
                    {/*page header*/}
                    <Text style={this.props.styles.targetViewHeader}>
                        {this.props.targetPageHeader}
                    </Text>
                    {/*user selections*/}
                    <Text style={this.props.styles.targetViewUserTargetsText}>
                        {this.props.userSelectData}
                    </Text>
                    {/*sliders list*/}
                    <SelectionSliderListView
                        styles = {this.props.styles}
                        sliderList = {this.prepTargetSliders}
                    />
                </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        targetPageHeader: state.appReducers.appDataText.targetPageHeader,
        userSelectData: state.userReducers.userSelectData.targets.targetsFormatted
    }
};

export default connect(mapStateToProps)(TargetView) //connect wrapper - also provides dispatcher