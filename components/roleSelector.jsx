import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RoleSelector({ onSelectRole }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Please select whether you are</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.roleButton}
                    onPress={() => onSelectRole('nurse')}
                >
                    <View style={[styles.iconCircle, { backgroundColor: '#E0F2F1' }]}>
                        <Image
                            source={require("../assets/images/nurseLogo.png")}
                            style={styles.iconCircle}
                            resizeMode="center"
                        />
                    </View>
                    <Text style={styles.roleText}>Nurse</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity
                    style={styles.roleButton}
                    onPress={() => onSelectRole('patient')}
                >
                    <View style={[styles.iconCircle, { backgroundColor: '#E3F2FD' }]}>
                        <Image
                            source={require("../assets/images/patientLogo.png")}
                            style={styles.iconCircle}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.roleText}>Patient</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 100,
    },
    label: {
        fontSize: 16,
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roleButton: {
        alignItems: 'center',
    },
    iconCircle: {
        width: 110,
        height: 110,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    roleText: {
        fontSize: 16,
        fontWeight: '500',
    },
    orText: {
        marginHorizontal: 24,
        fontSize: 16,
        fontWeight: '500',
    },
});