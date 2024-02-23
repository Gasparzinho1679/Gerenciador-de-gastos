import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

export default function SignUP(){
    const {signUp, loadingAuth} = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function handleSignUp(){
        if(nome === '' && email === '' && password === ''){
            setEmail("")
            setPassword("")
            setNome("")
            alert("Preencha todos os campos")
            return;
        }
        signUp(email, password, nome);
    }

    return(
        <View style={styles.container}>

            <View style={styles.areaLogo}>

                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={(text)=>setNome(text)}/>
                </View>

                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder="Seu Email" value={email} onChangeText={(text)=>setEmail(text)}/>
                </View>

                <View style={styles.areaInput}>
                    <TextInput style={styles.input} placeholder="Seu Senha" value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
                </View>

                <TouchableOpacity style={styles.submit} activeOpacity={0.6} onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff"/>
                        ): (
                            <Text style={styles.subtext}>Cadastrar-se</Text>
                        )
                    }
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F0f4ff",
    },
    areaLogo:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo:{
        marginBottom: 25,
    },
    areaInput:{
        flexDirection: "row",
        height: 40,
        marginBottom: 15
    },
    input:{
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: "#121212",
    },
    submit:{
        width: '90%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3b3bbf',
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    subtext:{
        fontSize: 20,
        color: '#fff'
    },
    link:{
        marginTop: 10,
        marginBottom: 10,
    },
    linkText:{
        color: '#000'
    }
})

