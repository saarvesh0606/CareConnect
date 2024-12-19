import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
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
            <Header
                name="Ritika Singh"
                employeeId="1234"
                department="####"
                wardNo="3"
            />
            <DateSelector />
            <TaskList />
            <LogoutButton onPress={handleLogout} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});