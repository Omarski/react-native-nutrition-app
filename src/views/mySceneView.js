
import {Component, propTypes} from 'react';
import PreferencesView from './PreferencesView';
export default class MyScene extends Component{

    static propTypes = {
        navigator: propTypes.object.isRequired,
        title: propTypes.string.isRequired,
        passProps:propTypes.object
    };

    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render(){

        return (
            <view className="splashMainView">
            <TouchableHighlight onPress = {this._handleNextPress({title:"Preferences", component:PreferencesView})}>
               Preferences page
            </TouchableHighlight>
            </view>
        )
    }
}
