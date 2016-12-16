
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import CustomView from './customView';

export default class SplashView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        styles:PropTypes.object.isRequired
    };

    static onClickBlock(view){
        switch (view) {
            case "custom":
                this.navigator.push(
                    {title:"Smoothie Factory",
                        component:CustomView,
                        passProps: {styles:this.props.styles}
                    }
                );
                break;
        }
    }

    render() {

        return (
            <View style={[this.props.styles.centerXY,{backgroundColor:"#001"}]}>
                <TouchableHighlight
                        style = {this.props.styles.splashBlock}
                        onPress = {()=>this.onClickBlock("custom")}
                        >
                    <View>
                        <Image source={require("../../images/splashCustom.png")}
                               style = {this.props.styles.splashBlockImage}/>
                        <Text style={this.props.styles.splashBlockText}>
                            Let's explore creating the perfect smoothie for you!
                        </Text>
                    </View>

                </TouchableHighlight>
            </View>
        )
    }
}
