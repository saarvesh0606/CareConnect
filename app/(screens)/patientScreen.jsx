import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/patientScreenComponents/Header';
import DateSelector from '../../components/patientScreenComponents/DataSelector';
import VoiceRecorder from '../../components/patientScreenComponents/VoiceRecorder';
import MessageInput from '../../components/patientScreenComponents/MessageInput';
import EmergencyButton from '../../components/patientScreenComponents/EmergencyButton';

export default function PatientHomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header patientName="XYZ" patientId="1234" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <DateSelector />
                <VoiceRecorder />
                <MessageInput />
            </ScrollView>
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

