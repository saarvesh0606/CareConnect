import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header({ patientName, patientId }) {




    //#1Todo: Patient name and Patient Id both will come from the login Screen
    //#2 Figure out how to transfer data from one screen to another

    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                    source={require('../../assets/images/profileIcon-patient.png')}
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>{patientName}</Text>
                    <Text style={styles.idText}>Patient ID : {patientId}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A8E6CE',
        padding: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        maxHeight: 400,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 16,
        color: '#333',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    idText: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});

