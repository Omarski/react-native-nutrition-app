
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
             imgSrc = selectObj[iconObj["id"]] === true ? iconObj.imgSrcOn: iconObj.imgSrcOff;
         } else {
             imgSrc = iconObj.imgSrcOn;
         }

        //image style
        if (iconObj.styleOff) { //has 2 state styles
            imgStyle =  selectObj[iconObj["id"]] === true ? iconObj.styleOn: iconObj.styleOff;
        } else {
            imgStyle = iconObj.styleOn;
        }

        //image clickabble?
        const onPressIcon = iconObj.onPressIcon ? ()=>iconObj.onPressIcon(selectObj):null;

         return (
            <TouchableHighlight
                style={imgStyle}
                onPress={onPressIcon}>
               <Image
                   source = {imgSrc}
               />
            </TouchableHighlight>
        )
    }
}