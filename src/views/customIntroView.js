
import React, {PropTypes} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import TargetView from './targetView';

class CustomIntroView extends React.Component{

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        introText: PropTypes.string
    };

    render(){
        return (
            <View style={this.props.styles.centerXY}>
                <Text>{this.props.introText}</Text>
                <TouchableHighlight onPress={()=>this.props.navigator.push({
                    title:"What's your goal?",
                    component:TargetView,
                    passProps: {styles:this.props.styles}
                })}>
                    <Text>
                        Click here to start!
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

//what props needed
const mapStateToProps = (state) => {
    return {
        introText: state.appReducers.appData.appText.customPageIntro
    }
};

export default connect(mapStateToProps)(CustomIntroView) //connect wrapper - also provides dispatcher