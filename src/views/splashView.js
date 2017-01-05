
import React, {PropTypes} from 'react';

import {
    View
} from 'react-native';

import SplashBlockView from './splashBlocksView';

import CustomIntroView from './customIntroView';


export default class SplashView extends React.Component{

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        styles:PropTypes.object.isRequired
    };

     onClickBlock(view){
        switch (view) {
            case "custom":
                this.props.navigator.push(
                    {title:"Smoothie Factory",
                        component:CustomIntroView,
                        passProps: {styles:this.props.styles}
                    }
                );
                break;
        }
    }

    render() {

        return (
            <View style={this.props.styles.splashBlockCont}>
                <SplashBlockView
                    styles={this.props.styles}
                    onClickBlock={()=>{this.onClickBlock("custom")}}
                    imageIndex={0}
                    blockTitle={"Let's explore creating the perfect smoothie for you!"}
                />
                <SplashBlockView
                    styles={this.props.styles}
                    onClickBlock={()=>{this.onClickBlock("custom")}}
                    imageIndex={0}
                    blockTitle={"Let's explore creating the perfect smoothie for you!"}
                />
                <SplashBlockView
                    styles={this.props.styles}
                    onClickBlock={()=>{this.onClickBlock("custom")}}
                    imageIndex={0}
                    blockTitle={"Let's explore creating the perfect smoothie for you!"}
                />

            </View>
        )
    }
}
