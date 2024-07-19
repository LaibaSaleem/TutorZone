import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {  Box, Text, Input, Icon, Button, HStack, Divider } from 'native-base';
import Images from '../../assets/images';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
    const navigation = useNavigation();

    return (
                <Box style={styles.innerContainer}>
                    <Box style={styles.box1}>
                        <Images.logo2 />
                        <Text style={styles.text1}>Log In Now!</Text>
                        <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.
                        </Text>
                    </Box>
                    <Box style={styles.box2}>
                        <Text style={styles.headingText}>Username or Email</Text>
                        <Input
                            size="lg"
                            placeholder="Username or Email"
                            fontFamily='Comfortaa'
                            borderRadius={10}
                            style={styles.input}
                            InputRightElement={<Icon as={Ionicons} name="person-outline" style={styles.icon} />}
                            placeholderTextColor="#8E8E8E"
                        />
                        <Text style={styles.headingText}>Password</Text>
                        <Input
                            size="lg"
                            placeholder="Enter Password"
                            type='password'
                            fontFamily='Comfortaa'
                            borderRadius={10}
                            style={styles.input}
                            InputRightElement={
                                <Icon as={AntDesign} name="lock" style={styles.icon} />
                            }
                            placeholderTextColor="#8E8E8E"
                        />
                        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}><Text style={styles.text3}>Forgot Password?</Text></TouchableOpacity>
                        <Button
                            backgroundColor="#054BB4"
                            width="343px"
                            height="48px"
                            borderRadius="12px"
                            marginTop="15px"
                            fontFamily="Comfortaa"
                            _pressed={{ backgroundColor: '#033C9D' }}
                        >
                            Log In Your Account
                        </Button>
                        <HStack alignItems="center">
                            <Divider flex={1} />
                            <Text mx={3} fontFamily='Comfortaa' color="#8E8E8E">OR</Text>
                            <Divider flex={1} />
                        </HStack>
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
                                // Handle Google login
                            }}
                            style={styles.buttonStyle}
                        >
                            <HStack alignItems="center" space={2}>
                                <Icon as={AntDesign} name="google" size="sm" color="#33363B" />
                                <Text>Continue with Google</Text>
                            </HStack>
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
                                // Handle Facebook login
                            }}
                            style={styles.buttonStyle}
                        >
                            <HStack alignItems="center" space={2}>
                                <Icon as={FontAwesome5} name="facebook-f" size="sm" color="#33363B" />
                                <Text>Continue with Facebook</Text>
                            </HStack>
                        </Button>

                        <HStack justifyContent="center">
                            <Text style={styles.text3}>Already have an account? </Text>
                            <Text
                                style={styles.text4}
                                onPress={() => navigation.navigate('SignUpScreen')}
                            >
                                Sign Up
                            </Text>
                        </HStack>
                    </Box>
                </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginLeft: 15,
    },
    box1: {
        width: '306px',
        height: '139px',
        top: '70px',
        left: '16px',
        gap: '20px',
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
        paddingRight: 40,  // Adjust right padding to accommodate icon
    },
    icon: {
        color: '#757575',
        position: 'absolute',
        marginLeft: 300,
        backgroundColor: '#F9F9F9',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonStyle: {
        borderColor: '#8E8E8E',
        borderWidth: '1px',
    },
    text3: {
        fontFamily: "Comfortaa",
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '18.9px',
        color: '#33363B',
        textAlign: 'right',
    },
    text4: {
        fontFamily: "Comfortaa",
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18.9px',
        color: '#054BB4',
        marginLeft: 5,
    }

});

export default LogInScreen;
