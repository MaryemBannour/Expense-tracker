import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
export const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[isLogin,setIsLogin]=useState(true);
  const[loading,setLoading]=useState(false);
  const {signIn,signUp}=useAuth();

  const handleAuth=async()=>{
    if(!email || !password){
      Alert.alert("Erreur","Please fill all fields");
      return;
    }
    if(password.length<6){
      Alert.alert("Erreur","Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      if(isLogin){
        await signIn(email,password);
      }else{
        await signUp(email,password);
      }
    } catch (error) {
      Alert.alert("Erreur",(error instanceof Error ? error.message : "An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : 'height'}
    className="flex-1 bg-background"
    >
      <ScrollView contentContainerStyle={{flexGrow:1}}
      keyboardShouldPersistTaps="handled"
      className="flex-1"
       >
        <View className="flex-1 justify-center px-lg pt-16" >
          <Text className="text-8xl">💰</Text>
        </View>
          <Text className="text-3xl font-bold text-center mb-sm text-text">
            Expense Tracker
          </Text>
            <Text className="text-lg text-center mb-xl text-text-secondary">
            {isLogin ? 'Log in to your account' : 'Create your account'}
          </Text> 
            <View className="mb-md">
            <TextInput
              className="bg-card p-md rounded-md text-base border border-border text-text"
              placeholder="Email"
              placeholderTextColor="#B2BEC3"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              editable={!loading}
            />
          </View>
            <View className="mb-md">
            <TextInput
              className="bg-card p-md rounded-md text-base border border-border text-text"
              placeholder="Password"
              placeholderTextColor="#B2BEC3"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
              editable={!loading}
            />
          </View>
            <TouchableOpacity 
            className={`bg-primary p-md rounded-md mt-lg shadow-md ${loading ? 'opacity-60' : ''}`}
            onPress={handleAuth}
            disabled={loading}
          >
            <Text className="text-text-white text-center text-base font-semibold">
              {loading ? 'Loading...' : (isLogin ? 'Log In' : 'Sign Up')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setIsLogin(!isLogin)}
            disabled={loading}
            className="mt-xl"
          >
            <Text className="text-center text-text-secondary text-base">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Text className="text-primary font-semibold">
                {isLogin ? 'Sign Up' : 'Log In'}
              </Text>
            </Text>
          </TouchableOpacity>
       </ScrollView>
    </KeyboardAvoidingView>
      );
};