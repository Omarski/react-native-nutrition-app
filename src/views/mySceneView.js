
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {styles} from '../style/main';
import SplashView from './splashView';

import PreferencesView from './preferencesView';

class MySceneView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        title: PropTypes.string,
        passProps:PropTypes.object,
        appDataLoaded:PropTypes.bool
    };

    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render() {

        return (
            <View style={styles.centerXY}>

                {/*loader image*/}
                {!this.props.appDataLoaded ?

                   <Image resizeMode="contain"
                           source={require('../../images/loaderArt.png')}
                    />: null}

                {/*splash view*/}
                {this.props.appDataLoaded ?
                    <SplashView
                        styles = {styles}
                        navigator = {this.props.navigator}
                    />

                    :null}

            </View>

        )
    }

// <View style={{marginTop: 200, alignSelf: 'center'}}>
// <TouchableHighlight onPress = {() => this._handleNextPress({title:"Preferences", component:PreferencesView})}>
// <Text> Preferences page</Text>
// </TouchableHighlight>
// </View>
}

//what props needed
const mapStateToProps = (state) => {
    return {
        appDataLoaded: state.appReducers.appDataLoaded
    }
};

export default connect(mapStateToProps)(MySceneView) //connect wrapper - also provides dispatcher