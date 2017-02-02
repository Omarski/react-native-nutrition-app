
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
            <View style={{flex:1}}>

                {/*loader image*/}
                {!this.props.appDataLoaded ?

                   <Image
                           style={styles.loaderArt}
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
}

//what props needed
const mapStateToProps = (state) => {
    return {
        appDataLoaded: state.appReducers.appDataLoaded
    }
};

export default connect(mapStateToProps)(MySceneView) //connect wrapper - also provides dispatcher