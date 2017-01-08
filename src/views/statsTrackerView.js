
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

    //statsTagColl = this.props.appDataTrackedStats;

    renderStats = () => {
       let statColl = {};
       this.props.userSelectItems.map((itemObj) => {
           console.log("===== item...");
           for (const stat in itemObj.stats){
               console.log("===== item stat ...");
               if (itemObj.stats[stat]){
                   console.log("===== stat has value in stats...");
                   if (statColl[stat]) {
                       console.log("===== stat found in coll... incrementing.");
                      statColl[stat].amount += itemObj.stats[stat].amount;
                  }else {
                      console.log("===== none found adding stat...");
                      statColl[stat] = itemObj.stats[stat];
                  }
               }
           }
       });

        console.log("=========> Stats: ");
        console.dir(statColl);

        for (const stat in statColl){

            const statText = statColl[stat].title + ": " + statColl[stat].amount;
            return(
                <Text style={this.props.styles.statsViewText}>
                    {statText}
                </Text>
            )
        }
    };

    render() {

        return (
                <View style={this.props.styles.modalStatsShell}>
                    {this.renderStats()}
                </View>

        )
    }
}