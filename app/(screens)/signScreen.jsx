import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Logo from '../../components/logo';
import Input from '../../components/signScreenComponents/input'
import Button from '../../components/Button';

export const LoginScreen = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login attempted with:', { id, password });
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Forgot password pressed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <Logo />
                <Text style={styles.title}>CareConnect</Text>
                <Text style={styles.subtitle}>Login in with your credentials</Text>

                <View style={styles.form}>
                    <Input
                        placeholder="Employee ID / Patient ID"
                        value={id}
                        onChangeText={setId}
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={styles.forgotPassword}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Button title="Continue" onPress={handleLogin} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 32,
    },
    form: {
        width: '100%',
        marginTop: 16,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: -8,
        marginBottom: 32,
    },
    forgotPasswordText: {
        color: '#666',
        fontSize: 14,
    },
    footer: {
        position: 'absolute',
        bottom: 32,
        left: 24,
        right: 24,
    },
});

