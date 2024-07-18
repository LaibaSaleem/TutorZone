import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Text, Input, Icon, Button, HStack, Divider } from 'native-base';
import Logo from '../logo2.svg';
import { Ionicons, Fontisto, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';


const SignUpScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    /*const handleSignUp = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => {
                alert(error.message); 
            });
    };
    */


    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                <Box style={styles.innerContainer}>
                    <Box style={styles.box1}>
                        <Logo />
                        <Text style={styles.text1}>Sign Up Now!</Text>
                        <Text style={styles.text2}>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.
                        </Text>
                    </Box>
                    <Box style={styles.box2}>
                        <Text style={styles.headingText}>User Name</Text>
                        <Input
                            size="lg"
                            placeholder="Enter User Name"
                            value={username}
                            fontFamily="Comfortaa"
                            borderRadius={10}
                            style={styles.input}
                            InputRightElement={<Icon as={Ionicons} name="person-outline" style={styles.icon} />}
                            placeholderTextColor="#8E8E8E"
                            onChangeText={(text) => setUsername(text)}
                        />
                        <Text style={styles.headingText}>Email Address</Text>
                        <Input
                            size="lg"
                            placeholder="Enter Email Address"
                            value={email}
                            fontFamily="Comfortaa"
                            borderRadius={10}
                            style={styles.input}
                            InputRightElement={<Icon as={Fontisto} name="email" style={styles.icon} />}
                            placeholderTextColor="#8E8E8E"
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Text style={styles.headingText}>Password</Text>
                        <Input
                            size="lg"
                            placeholder="Enter Password"
                            type='password'
                            value={password}
                            fontFamily="Comfortaa"
                            borderRadius={10}
                            style={styles.input}
                            InputRightElement={
                                <Icon as={AntDesign} name="lock" style={styles.icon} />
                            }
                            placeholderTextColor="#8E8E8E"
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Button
                            backgroundColor="#054BB4"
                            width="343px"
                            height="48px"
                            borderRadius="12px"
                            fontFamily="Comfortaa"
                            _pressed={{ backgroundColor: '#033C9D' }}
                        >
                            Create an Account
                        </Button>
                        <HStack alignItems="center" style={styles.orContainer}>
                            <Divider flex={1} />
                            <Text mx={3} fontFamily="Comfortaa" color="#8E8E8E">OR</Text>
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
                            onPress={() => { }}
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
                            onPress={() => { }}
                            style={styles.buttonStyle}
                        >
                            <HStack alignItems="center" space={2}>
                                <Icon as={FontAwesome5} name="facebook-f" size="sm" color="#33363B" />
                                <Text>Continue with Facebook</Text>
                            </HStack>
                        </Button>
                        <HStack justifyContent="center">
                            <Text style={styles.text3}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.replace('LogInScreen')}><Text style={styles.text4}>Log In</Text></TouchableOpacity>
                        </HStack>
                    </Box>
                </Box>
            </NativeBaseProvider>
        </SafeAreaView>
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
        textAlign: 'left'
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
        fontWeight: '500',
        lineHeight: '18.9px',
        color: '#8E8E8E'
    },
    text4: {
        fontFamily: "Comfortaa",
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18.9px',
        color: '#054BB4'
    }
});

export default SignUpScreen;
