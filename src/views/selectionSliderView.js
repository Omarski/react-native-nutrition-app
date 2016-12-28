
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
        userData: PropTypes.array.isRequired,
        onPressBlock: PropTypes.func.isRequired,
    };

    componentDidMount(){
        let newArray = this.props.sliderItems.slice();
        this.setState({dataSource:this.state.dataSource.cloneWithRows(newArray)});
    }

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>true});
        this.state = {
            dataSource: ds.cloneWithRows(props.sliderItems),
        };
    }

    render() {

        return (

            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    horizontal={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => //rowData has to change to rerender?
                        <View>
                            <SelectionItemView
                                styles = {this.props.styles}
                                targetObj = {rowData}
                                userData = {this.props.userData}
                                selected = {rowData.selected}
                                blockStyle = {this.props.styles.targetViewItemBlock}
                                blockStyleSelected={this.props.styles.targetViewItemBlockSelected}
                                imageSrc={require('../../images/targetImgFpo.png')}
                                imgStyle={this.props.styles.targetViewItemBlockImg}
                                blockTitle={rowData.title}
                                blockTextStyle={this.props.styles.targetViewItemBlockText}
                                blockId={rowData.id}
                                onPressBlock={this.props.onPressBlock}
                                specialSelectorColl={null}
                            />

                        </View>}
                />

            </View>
        );
    }
}