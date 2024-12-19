import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList() {
    const tasks = [
        {
            time: '9 AM',
            room: 'Room 203',
            bed: 'Bed-8',
            request: 'Requested water',
            isUrgent: false,
        },

        {
            time: '10 AM',
            room: 'Room 203',
            bed: 'Bed-8',
            request: 'Requested water',
            isUrgent: false,
        },
        {
            time: '11 AM',
            room: 'Room 107',
            bed: 'Bed-17',
            request: 'Requested bandages',
            isUrgent: false,
        },
        {
            time: '12 PM',
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

