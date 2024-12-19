import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Header({ name, employeeId, department, wardNo }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
                <MaterialCommunityIcons name="clipboard-text" size={24} color="#006400" />
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.detailText}>Employee ID : {employeeId}</Text>
                <Text style={styles.detailText}>Department : {department}</Text>
                <Text style={styles.detailText}>Ward No. : {wardNo}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#90EE90',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    welcomeSection: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 16,
        color: '#006400',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        marginTop: 4,
    },
    detailsSection: {
        marginTop: 10,
    },
    detailText: {
        fontSize: 14,
        color: '#006400',
        marginTop: 2,
    },
});

