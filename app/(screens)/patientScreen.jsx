import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Header from '../../components/patientScreenComponents/Header';
import DateSelector from '../../components/patientScreenComponents/DataSelector';
import VoiceRecorder from '../../components/patientScreenComponents/VoiceRecorder';
import MessageInput from '../../components/patientScreenComponents/MessageInput';
import SendButton from '../../components/patientScreenComponents/SendButton';
import EmergencyButton from '../../components/patientScreenComponents/EmergencyButton';

export default function PatientHomeScreen() {

    const handleHistoryPress = () => {
        router.push('/(screens)/RequestHistoryScreen')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header patientName="XYZ" patientId="1234" onPress={handleHistoryPress} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <DateSelector />
                <VoiceRecorder />
                <MessageInput />
            </ScrollView>
            <SendButton />
            <EmergencyButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
    },
});

