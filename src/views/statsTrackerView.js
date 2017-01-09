
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
        appDataTrackedStats:PropTypes.array.isRequired,
    };

    renderStats = () => {
       let statColl = {};
       //let items = new Array(this.props.userSelectItems);
       //console.log("Items count: " + items.length);
        this.props.userSelectItems.map((itemObj) => {
           console.log("===== item...");
           for (const stat in itemObj.stats){
               console.log("===== stat...");
               if (itemObj.stats[stat]){
                   if (statColl[stat]) {
                       statColl[stat].amount += itemObj.stats[stat].amount;
                       //statColl[stat].amount = {...itemObj.stats[stat], amount:itemObj.stats[stat].amount + itemObj.stats[stat].amount}.amount;
                       console.log("For : " + stat + "  - now: " + statColl[stat].amount);
                  }else {
                       //new obj otherwise mutates stats in items in state
                       statColl[stat] = {...itemObj.stats[stat]};
                       console.log("Adding For : " + stat + "  - now: " + statColl[stat].amount);
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