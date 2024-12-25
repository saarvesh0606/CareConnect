import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';

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
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        maxHeight: 150,
    },
    
});

