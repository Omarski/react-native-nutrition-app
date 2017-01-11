
import React, {PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

export default class StatsTrackerView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        userSelectItems:PropTypes.array.isRequired,
        userSelectTargets:PropTypes.array.isRequired,
        userSelectStandard:PropTypes.string.isRequired,
        appDataTrackedStats:PropTypes.array.isRequired,
    };

    renderStats = () => {

       let statColl = {};
        this.props.userSelectItems.map((itemObj) => {
           for (const stat in itemObj.stats){
               if (itemObj.stats[stat]){

                   const itemMeasurementObj = itemObj.measurement[this.props.userSelectStandard];
                   const percOfInc = itemMeasurementObj.current / itemMeasurementObj.inc;

                   if (statColl[stat]) {
                       statColl[stat].amount += (itemObj.stats[stat].amount * percOfInc);
                  }else {
                       //new obj otherwise mutates stats in items in state
                       statColl[stat] = {...itemObj.stats[stat],amount:itemObj.stats[stat].amount * percOfInc};
                   }
               }
           }
       });

        const texRender = Object.keys(statColl).map((stat,index) => {

            let recomPerc = "";
            if (statColl[stat].dailyRec){
                recomPerc = "("+Math.round(statColl[stat].amount / statColl[stat].dailyRec * 100)+"%)";
            }
            return (<Text key = {index} style={this.props.styles.statsViewText}>
                        {statColl[stat].title}{": "}
                        {statColl[stat].amount}
                        {statColl[stat].tag ? statColl[stat].tag:null}{" "}
                        {statColl[stat].dailyRec ? recomPerc:null}{" "}
                    </Text>)
        });

        console.dir(this.props.userSelectItems);
        return texRender;
    };

    render() {

        return (
                <View style={this.props.styles.modalStatsShell}>
                    <Text>{this.renderStats()}</Text>
                </View>

        )
    }
}