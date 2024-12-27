import React from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const DateItem = ({ day, weekday, isSelected, onSelect }) => (
    <TouchableOpacity
        style={[styles.dateItem, isSelected && styles.selectedDate]}
        onPress={onSelect}
    >
        <Text style={[styles.dayNumber, isSelected && styles.selectedText]}>
            {day}
        </Text>
        <Text style={[styles.weekday, isSelected && styles.selectedText]}>
            {weekday}
        </Text>
    </TouchableOpacity>
);

export default function DateSelector() {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [dates, setDates] = React.useState([]);

    React.useEffect(() => {
        // Generate the next 7 days starting from today
        const today = new Date();
        const generatedDates = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index);
            const day = date.getDate();
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
            return { day, weekday };
        });
        setDates(generatedDates);
    }, []);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {dates.map((date, index) => (
                <DateItem
                    key={index}
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
        marginVertical: 10,
    },
    dateItem: {
        width: 50,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 25,
    },
    selectedDate: {
        backgroundColor: '#006400',
    },
    dayNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    weekday: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    selectedText: {
        color: '#fff',
    },
});
