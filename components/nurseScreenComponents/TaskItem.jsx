import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function TaskItem({ room, bed, request, isUrgent = false }) {
    return (
        <View style={styles.container}>
            <View style={[styles.taskContent, isUrgent && styles.urgentTask]}>
                <Text style={styles.locationText}>{room}, {bed}</Text>
                <Text style={styles.requestText}>{request}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    timeText: {
        width: 50,
        fontSize: 14,
        color: '#666',
        marginRight: 10,
    },
    taskContent: {
        flex: 1,
        backgroundColor: '#E8F5E9',
        padding: 15,
        borderRadius: 10,
    },
    urgentTask: {
        backgroundColor: '#FFCDD2',
    },
    locationText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    requestText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

