import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MessageInput() {
    const [message, setMessage] = React.useState('');

    const handleSend = () => {
        if (message.trim()) {
            // Add send message logic here
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message..."
                multiline
            />
            <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSend}
            >
                <MaterialIcons name="send" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 30,
        alignItems: 'center',
    },
    input: {
        flex: 2,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginRight: 10,
        maxHeight: 150,
    },
    sendButton: {
        backgroundColor: '#008B8B',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

