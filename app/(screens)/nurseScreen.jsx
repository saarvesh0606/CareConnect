import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';
import Header from '../../components/nurseScreenComponents/Header';
import DateSelector from '../../components/nurseScreenComponents/DateSelector';
import TaskList from '../../components/nurseScreenComponents/TaskList';
import LogoutButton from '../../components/nurseScreenComponents/LogOutButton';


export default function NurseDashboardScreen() {
    const handleLogout = () => {
        // Add logout logic here
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Icon name="chevron-left" size={20} color="#007E7E" style={{ marginRight: 10 }} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Header
                name="Ritika Singh"
                employeeId="1234"
                department="####"
                wardNo="3"
            />
            <DateSelector />
            <TaskList />
            <LogoutButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    backText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#007E7E',
    },
});