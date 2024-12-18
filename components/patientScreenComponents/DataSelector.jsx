import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const DateItem = ({ day, weekday, isSelected, onSelect }) => (
    <TouchableOpacity
        style={[styles.dateItem, isSelected && styles.selectedDate]}
        onPress={onSelect}
    >
        <Text style={[styles.dayText, isSelected && styles.selectedText]}>{day}</Text>
        <Text style={[styles.weekdayText, isSelected && styles.selectedText]}>{weekday}</Text>
    </TouchableOpacity>
);

export default function DateSelector() {
    const [selectedDate, setSelectedDate] = React.useState(11);

    const dates = [
        { day: 9, weekday: 'MON' },
        { day: 10, weekday: 'TUE' },
        { day: 11, weekday: 'WED' },
        { day: 12, weekday: 'THU' },
        { day: 13, weekday: 'FRI' },
        { day: 14, weekday: 'SAT' },
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {dates.map((date) => (
                <DateItem
                    key={date.day}
                    day={date.day}
                    weekday={date.weekday}
                    isSelected={selectedDate === date.day}
                    onSelect={() => setSelectedDate(date.day)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginVertical: 20,
    },
    dateItem: {
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        width: 60,
    },
    selectedDate: {
        backgroundColor: '#008B8B',
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    weekdayText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    selectedText: {
        color: '#fff',
    },
});

