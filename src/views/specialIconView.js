
import React, {PropTypes} from 'react';

import {
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class SpecialIconsView extends React.Component {

    static propTypes = {
        iconObj: PropTypes.object.isRequired,
        selectObj: PropTypes.object.isRequired
    };

    render() {

         const iconObj = this.props.iconObj;
         const selectObj = this.props.selectObj;
         let imgSrc, imgStyle;

         //image source
         if (iconObj.imgSrcOff) { //has 2 state images
             imgSrc = selectObj["id"] === true ? iconObj.imgSrcOn: iconObj.imgSrcOff;
         } else {
             imgSrc = iconObj.imgSrcOn;
         }

        //image style
        if (iconObj.styleOff) { //has 2 state styles
            imgStyle = selectObj["id"] === true ? iconObj.styleOn: iconObj.styleOff;
        } else {
            imgStyle = iconObj.styleOn;
        }

        return (
            <TouchableHighlight
                style={imgStyle}
                onPress={()=>iconObj.onPressIcon(selectObj)}>
               <Image
                   source = {imgSrc}
               />
            </TouchableHighlight>
        )
    }
}