import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Platform } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
    const {signIn, loadingAuth} = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        signIn(email, password);
    }

    return(
        <View style={styles.background}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : ''} enabled>

                <Image style={styles.logo} source={require('../../assets/Logo.png')}/>

                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder="Seu email" value={email} onChangeText={(email) => setEmail(email)}/>
                </View>

                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder="Seu senha" value={password} onChangeText={(password)=> setPassword(password)}/>
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={20} color="#fff"/>
                    ) : (<Text style={styles.submitText}>Acessar</Text>)}
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={ ()=> navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Criar conta!</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#f0f4ff"
    },
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo:{
        marginBottom: 25,
    },
    areaInput:{
        flexDirection: "row"
    },
    input:{
        backgroundColor: "#fff",
        width: "90%",
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: "#121212",
        marginBottom: 15
    },
    submitBtn:{
        width: "90%",
        height: 45,
        borderRadius: 8,
        backgroundColor: "#3b3dbf",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"    
    },
    submitText:{
        fontSize: 20,
        color: "#fff"
    },
    link:{
        marginTop: 10,
        marginBottom: 10
    },
    linkText:{
        color: "#171717"
    }
})