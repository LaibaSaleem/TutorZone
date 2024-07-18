import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, Text, Input, Icon, Button, HStack, Divider, VStack } from 'native-base';
import Logo from '../logo2.svg';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const PasswordChangedScreen = () => {
    const navigation = useNavigation();
    const route = useRoute(); 

    const { email } = route.params;
    console.log(email);
    
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Box style={styles.innerContainer}>
                <Box style={styles.box1}>
                    <Logo />
                    <Text style={styles.text1}>Forgot Password</Text>
                    <Text style={styles.text2}>We've sent reset password link to your email</Text>
                    <Text style={styles.text3}>{email}</Text>
                </Box>
                    <VStack my='455' space={3}>
                        <Button
                            backgroundColor="#054BB4"
                            width="343px"
                            height="48px"
                            borderRadius="12px"
                            marginTop="15px"
                            fontFamily="Confortaa"
                            _pressed={{ backgroundColor: '#033C9D' }}
                            onPress={() => {
                                navigation.navigate('NewPasswordScreen');
                            }}
                        >
                            Reset Password
                        </Button>
                        <Button
                            backgroundColor="#FFFFFF"
                            width="343px"
                            height="48px"
                            borderRadius="12px"
                            _text={{
                                color: '#33363B',
                                fontFamily: 'Comfortaa',
                                fontSize: '14px',
                                fontWeight: '400',
                            }}
                            _pressed={{ backgroundColor: '#E2E8F0' }}
                            onPress={() => {
                                navigation.navigate('LogInScreen');
                            }}
                            style={styles.buttonStyle}
                        >
                            Back to Log In
                        </Button>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',
    },
    innerContainer:{
        marginLeft: 15,
    },
    box1: {
        width: '306px',
        height: '139px',
        top: '70px',
        left: '16px',
        gap: '20px',
        marginTop: 20,
    },
    text1: {
        fontFamily: 'Comfortaa',
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '27px',
        textAlign: 'left'
    },
    text2: {
        fontFamily: 'Comfortaa',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        textAlign: 'left',
        color: '#33363B',
    },
    text3: {
        fontFamily: 'Comfortaa',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'left',
        marginTop: -15,
        color: '#33363B',
    },
    buttonStyle: {
        borderColor: '#8E8E8E',
        borderWidth: '1px',
    },
});

export default PasswordChangedScreen;
