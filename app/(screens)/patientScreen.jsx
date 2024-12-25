import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Icon name="chevron-left" size={20} color="#007E7E" style={{ marginRight: 10 }} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Header patientName="XYZ" patientId="1234" onPress={handleHistoryPress} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <DateSelector />
                <VoiceRecorder />
                <MessageInput />
                <SendButton />
                <EmergencyButton />
            </ScrollView>
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

