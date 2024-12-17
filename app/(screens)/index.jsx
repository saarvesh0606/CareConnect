import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Logo from '../../components/logo';
import RoleSelector from '../../components/roleSelector';
import Button from '../../components/Button';


export default function OnboardingScreen({ navigation }) {
  const handleRoleSelect = (role) => {
    // Handle role selection
    console.log('Selected role:', role);
  };

  const handleContinue = () => {
    // Handle continue button press
    console.log('Continue pressed')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo></Logo>
      <RoleSelector onSelectRole={handleRoleSelect} />
      <View style={styles.footer}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
  },
});

