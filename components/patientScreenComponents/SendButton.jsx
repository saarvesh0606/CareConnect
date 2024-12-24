import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SendButton() {
    const handleSend= () => {
        // Add Send handling logic here
    };

return (
  <TouchableOpacity style={styles.sendButtonLarge} onPress={handleSend}>
    <Text style={styles.sendButtonText}>Send Request</Text>
  </TouchableOpacity>
);
};
const styles = StyleSheet.create({
    sendButtonLarge: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#008B8B',
      padding: 15,
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 10,
    },
    sendButtonText: {
      fontSize: 16,
      color: 'white',
      fontWeight: '500',
    },
});