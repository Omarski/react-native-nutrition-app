
import React, {PropTypes} from 'react';

import {
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import SelectionItemView from './selectionItemView';

export default class SelectionSliderView extends React.Component {

    static propTypes = {
        styles: PropTypes.object.isRequired,
        sliderItems: PropTypes.array.isRequired,
        sliderTitle: PropTypes.string,
        onPressBlock: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.sliderItems)
        };
    }


    render() {

        console.log(">>>>>>>> Data source");
        console.dir(this.state.dataSource);

        return (
            <View style={{flex: 1, paddingTop: 22}}>
                {this.props.sliderTitle ? <Text>{this.props.sliderTitle}</Text>:null}
                <ListView horizontal={true}>
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <View>
                            <SelectionItemView
                            styles = {this.props.styles}
                            blockStyle={this.props.styles.targetViewItemBlock}
                            imageSrc={require('../../images/targetImgFpo.png')}
                            imgStyle={this.props.styles.targetViewItemBlockImg}
                            blockTitle={rowData.title}
                            blockId={rowData.target}
                            onPressBlock={this.props.onPressBlock}
                            specialSelectorColl={null}
                            />
                        </View>}}
                </ListView>
            </View>
        );
    }
}