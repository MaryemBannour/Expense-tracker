import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import { Login } from '../screens/Auth/Login';
import { View, ActivityIndicator, Text } from 'react-native';
import { COLORS } from '../constants/theme';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const { user, logOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>✅ Connecté !</Text>
      <Text style={{ marginBottom: 20 }}>Email: {user?.email}</Text>
      <Text style={{ color: COLORS.primary, fontSize: 18 }} onPress={logOut}>
        Se déconnecter
      </Text>
    </View>
  );
};

export const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};