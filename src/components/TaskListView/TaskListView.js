import React, { Component } from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TaskListView extends Component {
    constructor(props) {
        super(props);
    }
    _renderSectionHeader = (sectionData) => (
        <View style={styles.headerContainer}>
            <View style={styles.headerTagContainer}>
                <Text style={styles.headerText}>{sectionData.section.title.substr(0, 1)}</Text>
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
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        borderRadius: 25,
        marginTop: 10
    },
    headerTagContainer: {
        color: '#fff',
        fontSize: 22,
    },
    headerText: {
        fontSize: 16,
        marginLeft: 10
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

