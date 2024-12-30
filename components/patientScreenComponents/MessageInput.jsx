import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MessageInput({ onSend }) {
    const [message, setMessage] = React.useState('');

    const handleSend = () => {
        if (message.trim()) {
            const newRequest = {
                request: message,
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
            };
            onSend(newRequest); // Call the onSend function passed as a prop
            setMessage(''); // Clear the input
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
                onSubmitEditing={handleSend} // Allow sending on pressing "Enter"
            />
            {/* Integrated SendButton Code */}
            <TouchableOpacity style={styles.sendButtonSmall} onPress={handleSend}>
                <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        maxHeight: 150,
    },
    sendButtonSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008B8B',
        padding: 8, // Reduced padding to make it smaller
        borderRadius: 8, // Slightly smaller border radius
        marginHorizontal: 10,
        marginBottom: 5,
        width: 80, // Set a fixed width to reduce button size
        height: 40
    },
    sendButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
});
