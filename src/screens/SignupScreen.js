import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
        console.log('User account created & signed in!');
        })
        .catch(error => {
        console.error('Error signing up:', error);
        });
    };

    return (
    <View style={styles.container}>
        <Text>Signup Screen</Text>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        />
        <Button title="Sign Up" onPress={handleSignup} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    },
});

export default SignupScreen;
