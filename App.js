import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../CareConnect/app/(screens)/index'; // Adjust the path as necessary
import SignInScreen from '../CareConnect/app/(screens)/signScreen' // Adjust the path as necessary

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}