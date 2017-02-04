
import React, {PropTypes} from 'react';

import {
    View
} from 'react-native';

import {connect} from 'react-redux';
import SplashBlockView from './splashBlocksView';
import CustomIntroView from './customIntroView';
import SavedCollectionsView from './savedCollectionsView';
import {titleCap} from '../js/common.js';



class SplashView extends React.Component{

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

            case "myColl":
                this.props.navigator.push(
                    {title:"My Coll",
                        component:SavedCollectionsView,
                        passProps: {styles:this.props.styles,
                                    savedCollSource:"user",
                                    appDataSavedViewHeader:this.props.appDataSavedViewHeader,
                                    titleCap:titleCap
                        }
                    }
                );
                break;

            case "readyColl":
                this.props.navigator.push(
                    {title:"Ready Coll",
                        component:SavedCollectionsView,
                        passProps: {styles:this.props.styles,
                                    savedCollSource:"sample",
                                    sampleCollViewHeader:this.props.sampleCollViewHeader,
                                    titleCap:titleCap
                        }
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
                    onClickBlock={()=>{this.onClickBlock("myColl")}}
                    imageIndex={0}
                    blockTitle={"Let's explore creating the perfect smoothie for you!"}
                />
                <SplashBlockView
                    styles={this.props.styles}
                    onClickBlock={()=>{this.onClickBlock("readyColl")}}
                    imageIndex={0}
                    blockTitle={"Let's explore creating the perfect smoothie for you!"}
                />

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appDataSavedViewHeader: state.appReducers.appData.appText.savedCollViewHeader,
        sampleCollViewHeader: state.appReducers.appData.appText.sampleCollViewHeader,
    }
};
export default connect(mapStateToProps)(SplashView) //connect wrapper - also provides dispatcher