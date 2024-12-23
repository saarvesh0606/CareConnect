import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList() {
    const tasks = [
        {
            room: 'Room 203',
            bed: 'Bed-8',
            request: 'Requested water',
            isUrgent: false,
        },

        {
            room: 'Room 203',
            bed: 'Bed-8',
            request: 'Requested water',
            isUrgent: false,
        },
        {

            room: 'Room 107',
            bed: 'Bed-17',
            request: 'Requested bandages',
            isUrgent: false,
        },
        {
            room: 'Room 106',
            bed: 'Bed-23',
            request: 'chest pain check-up',
            isUrgent: true,
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {tasks.map((task, index) => (
                <TaskItem key={index} {...task} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

