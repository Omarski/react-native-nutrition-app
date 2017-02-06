
import React, {PropTypes} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import ButtonCust from '../viewCommon/buttonCust';
import TargetView from './targetView';
import PreferencesView from './preferencesView';


class CustomIntroView extends React.Component{

    static propTypes = {
        styles: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
        introText: PropTypes.string
    };

    onPressPrefBtn = ()=>{
        this.props.navigator.push(
            {title:"Prefs",
                component:PreferencesView,
                passProps: {styles:this.props.styles}
            });
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
                <ButtonCust
                    title = "Preferences"
                    styleBox= {this.props.styles.buttonModalNext}
                    styleTitle={this.props.styles.buttonTitleModalNext}
                    onButtonPress={this.onPressPrefBtn}
                    enabled={true}
                    styleDisabled = {{opacity:0.5}}
                />
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