import React, { useState } from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { NativeBaseProvider, Box, Text, Input, Icon, Button, HStack, Divider, VStack } from 'native-base';
import Image from '../../assets/images';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Box style={styles.innerContainer}>
                <Box style={styles.box1}>
                    <Image.logo2 />
                    <Text style={styles.text1}>Forgot Password</Text>
                    <Text style={styles.text2}>No worries, we'll send you instructions for resest
                    </Text>
                </Box>
                <Box style={styles.box2}>
                    <Text style={styles.headingText}>Email Address</Text>
                    <Input
                        size="lg"
                        placeholder="Enter Email Address"
                        fontFamily='Comfortaa'
                        borderRadius={10}
                        style={styles.input}
                        InputRightElement={<Icon as={Fontisto} name="email" style={styles.icon} />}
                        placeholderTextColor="#8E8E8E"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <VStack my='358' space={3}>
                        <Button
                            backgroundColor="#054BB4"
                            width="343px"
                            height="48px"
                            borderRadius="12px"
                            marginTop="15px"
                            fontFamily="Confortaa"
                            _pressed={{ backgroundColor: '#033C9D' }}
                                onPress={() => navigation.navigate('PasswordChangedScreen', { email })}
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
                                navigation.navigate('LogInScreen')
                            }}
                            style={styles.buttonStyle}
                        >
                            Back to Log In
                        </Button>
                    </VStack>
                    </Box>
                </Box>
            </NativeBaseProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    innerContainer:{
        marginLeft: 15,
        backgroundColor: '#FFFFFF'
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
    box2: {
        width: 343,
        height: 538,
        top: '227px',
        left: '16px',
        gap: '16px',
        marginVertical: 20,
    },
    headingText: {
        fontFamily: 'Comfortaa',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 21.6,
        textAlign: 'left',
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
        backgroundColor: '#F9F9F9',
        paddingLeft: 15,
        paddingRight: 40, 
    },
    icon: {
        color: '#757575',
        position: 'absolute',
        marginLeft: 300,
        backgroundColor: '#F9F9F9',
    },
    buttonStyle: {
        borderColor: '#8E8E8E',
        borderWidth: '1px',
    }
});

export default ForgotPasswordScreen;
