import React, { Component } from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TaskListView extends Component {
    constructor(props) {
        super(props);
    }
    _renderSectionHeader = (sectionData) => (
        <View style={styles.headerContainer}>
            <View style={styles.headerTagContainer}>
                <Text style={styles.headerTextTag}>{sectionData.section.title.substr(0, 1)}</Text>
            </View>
            <Text style={styles.headerText}>{sectionData.section.title}</Text>
        </View>
    )
    _renderItem = (itemData) => (
        <TouchableOpacity onPress={() => this._onClickTask(itemData)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTextTitle}>{itemData.item.title}</Text>
                <Text>{itemData.item.description}</Text>
            </View>
        </TouchableOpacity>
    )

    _onClickTask = task => {
        this.props.navigation.navigate('Task', { task: task.item })
    }

    render = () => {
        return (
            <SectionList
                renderSectionHeader={this._renderSectionHeader}
                sections={[
                    {
                        data: this.props.tasks.filter(data => data.priority),
                        key: 'higthPriority', title: 'Higth Priority'
                    },
                    {
                        data: this.props.tasks.filter(data => !data.priority),
                        key: 'lowPriority', title: 'Low Priority'
                    }]}
                renderItem={this._renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00AAFF',
        borderRadius: 25,
        marginTop: 10
    },
    headerTagContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    headerTextTag: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#000'
    },
    headerText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#fff'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3F2F0',
        marginTop: 5,
        padding: 10,
        height: 75
    },
    itemTextTitle: {
        fontSize: 22
    }

})

