import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function LogoutButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialIcons name="logout" size={24} color="#006400" />
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#E8F5E9',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        color: '#006400',
        fontWeight: '500',
    },
});

