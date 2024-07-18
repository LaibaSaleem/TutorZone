import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Logo from '../logo.svg';
import Background from '../background.svg';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('SignUpScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <NativeBaseProvider>
            <Box style={styles.container}>
                <Background style={styles.background} />
                <Box style={styles.overlay}>
                    <Logo style={styles.logo} />
                    <Text style={styles.title}>Tutor Zone</Text>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set the background color to white
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 20,
        width: 70,
        height: 70,
    },
    title: {
        fontFamily: 'Comfortaa',
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 30,
        letterSpacing: 4,
        textAlign: 'center',
        color: '#333',
    },
});

export default SplashScreen;
