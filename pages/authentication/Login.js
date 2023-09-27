import { TouchableOpacity, TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    // Handle login logic here, e.g., send email and password to your server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  return (
   <View style={styles.container}>
         <View style={styles.title}>
            <Image
                source={require('../../images/Logo.png')}
                style={styles.logoImage}
                resizeMode="cover"
            />

            <Text style={styles.text}>Sign in</Text>
         </View>
        
        
        <View style={styles.form}>
            <View style={styles.label}>
                <Text style={styles.type}>Email Address</Text> 

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                /> 
            </View>

            <View style={styles.label}>
                <Text style={styles.type}>Password</Text> 

                <View style={styles.passwordInputContainer}>
                    <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={!isPasswordVisible}
                    />
                    <MaterialIcons
                    name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                    size={24}
                    color="black"
                    style={styles.passwordIcon}
                    onPress={togglePasswordVisibility}
                    />
                </View>
            </View>

            <View style={styles.auth}>
                    <CheckBox
                        title="Remember Me"
                        checked={isChecked}
                        onPress={toggleCheckbox}
                        containerStyle={{
                            backgroundColor: 'transparent', // Background color
                            borderWidth: 0, // Border width
                            padding: 0,
                            alignItems: 'center',
                          }}

                          titleProps={{
                            style: {
                              // Style for the title text
                              color: 'black', // Text color
                              marginLeft: 1, // Spacing between the checkbox and the text
                            },
                          }}

                          checkedColor="green" // Color when the checkbox is checked
                          uncheckedColor="gray" // Color when the checkbox is unchecked
                    />

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password?</Text> 
                    </TouchableOpacity>
                    
            </View>

            <TouchableOpacity
                style={styles.nextButton}
                title="Login" 
                // onPress={handleLogin} 
                onPress={() => navigation.navigate('home')}>
                <Text style={styles.buttonWhite}>Sign In</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.continue}>
            <View style={styles.continueLine}>
                <View style={styles.line}></View>
                <Text style={styles.continueText}>or continue with</Text>
                <View style={styles.line}></View>
            </View>

            <View style={styles.continueImage}>
                    <TouchableOpacity>
                        <Image
                        source={require('../../images/Facebook Icon.png')}
                        style={styles.continueImageType}
                        resizeMode="cover"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                        source={require('../../images/google.png')}
                        style={styles.continueImageType}
                        resizeMode="cover"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                        source={require('../../images/apple.png')}
                        style={styles.continueImageType}
                        resizeMode="cover"
                        />
                    </TouchableOpacity>
                    
            </View>

        </View>

        <View style={styles.noAccount}>
                <Text style={styles.notext}>Dont have an account?</Text>
                <TouchableOpacity
                    style={styles.register}
                    onPress={() => navigation.navigate('signup')}
                    >
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 20,
    padding: 20, 
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: '#373838', 
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  logoImage: {
    width: 150,
    height: 100,
  },

  continueImageType: {
    width: 30,
    height: 30,
  },

  form: {
    width: '100%',
    gap: 10,
  },

  label : {
    gap: 5,
  },

  type: {
    color: '#373838', 
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    // marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  }, 
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
  passwordIcon: {
    padding: 8,
  },

  auth: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotPassword:{
    color: '#CE695E', 
    fontSize: 14,
    letterSpacing: 1,
  },
  nextButton: {
    backgroundColor: '#D25705',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWhite: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
  },

  continue: {
    gap: 20,
  },

  continueLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    
  },

  line: {
    width: 50,
    height: 1,
    backgroundColor: '#000',
  },

  continueText: {
    color: '#373838', 
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 1,
  },

  continueImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 30,
  },

  noAccount: {
    // backgroundColor: '#fff',
    // padding: 10,
    // borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    gap: 3,
  },

  notext: {
    color: '#373838', 
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
  },

  registerText: {
    color: '#D25705', 
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
