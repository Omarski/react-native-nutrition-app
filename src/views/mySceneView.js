
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import PreferencesView from './preferencesView';

export default class MySceneView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        title: PropTypes.string,
        passProps:PropTypes.object
    };

    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        console.log("><><><><><><> :"+ this.props.navigator);
        this.props.navigator.push(nextRoute);
    }

    render() {

        return (
            <View style={{marginTop: 200, alignSelf: 'center'}}>
                <TouchableHighlight onPress = {() => this._handleNextPress({title:"Preferences", component:PreferencesView})}>
                    <Text> Preferences page</Text>
                </TouchableHighlight>
            </View>

        )
    }
}