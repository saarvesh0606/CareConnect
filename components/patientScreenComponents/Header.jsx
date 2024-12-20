import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function Header({ patientName, patientId, onPress }) {

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
                <View style={styles.history_Icon_n_Text}>
                    <Pressable onPress={onPress}>
                        <MaterialCommunityIcons name="menu" size={35} color="#008B8B" />
                    </Pressable>
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
    history_Icon_n_Text: {
        fontSize: 16,
        color: 'black',
        alignItems: 'center',
        flex: 'row',
        alignItems: 'center',
        padding: 10,
    }
});

