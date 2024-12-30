import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Header from '../../components/patientScreenComponents/Header';
import DateSelector from '../../components/patientScreenComponents/DateSelector';
import VoiceRecorder from '../../components/patientScreenComponents/VoiceRecorder';
import MessageInput from '../../components/patientScreenComponents/MessageInput';

import EmergencyButton from '../../components/patientScreenComponents/EmergencyButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutButton from '../../components/patientScreenComponents/LogOutButton'

export default function PatientHomeScreen() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const loadRequestHistory = async () => {
            try {
                const storedRequests = await AsyncStorage.getItem('requestHistory');
                if (storedRequests) {
                    setRequests(JSON.parse(storedRequests));
                }
            } catch (error) {
                console.error("Error loading request history:", error);
            }
        };
        loadRequestHistory();
    }, []);

    const handleHistoryPress = () => {
        router.push('/(screens)/RequestHistoryScreen'); // Navigates to Request History Screen
    };

    const handleSendMessage = async (newRequest) => {
        const updatedRequests = [newRequest, ...requests]; // Add new request to the top
        setRequests(updatedRequests);
        await AsyncStorage.setItem('requestHistory', JSON.stringify(updatedRequests)); // Save to AsyncStorage
        console.log("Sent Message:", newRequest);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header patientName="XYZ" patientId="1234" onPress={handleHistoryPress} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <DateSelector />
                <VoiceRecorder />
                <MessageInput onSend={handleSendMessage} />
                
                <EmergencyButton onSend={() => handleSendMessage({ request: 'Emergency Request', time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString() })} />
            </ScrollView>
            <LogoutButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
    },
});