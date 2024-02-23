import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Profile(){
    const {signOut, user} = useContext(AuthContext);
    const navigation = useNavigation();

    return(
       <SafeAreaView style={styles.container}>
            <Header title='Meu perfil'/>
            <Text style={styles.message}>hey, bem vindo de volta!</Text>

            <Text style={styles.name} numberOfLines={1}>{user && user.name}</Text>

            <TouchableOpacity style={styles.newLink} onPress={() => navigation.navigate('Registrar')}>
                <Text style={styles.newText}>Fazer registro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={signOut}>
                <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>

       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f4ff',
        alignItems: "center"
    },
    message:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 24
    },
    name:{
        fontSize: 24,
        marginBottom: 24,
        marginTop: 8,
        paddingRight: 8, paddingLeft: 8,
        color: "#121212",
        fontStyle: "italic"
    },
    newLink:{
        backgroundColor: "#3b3dbf",
        width: '90%',
        height: 45,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12
    },
    newText:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff'
    },
    logoutBtn:{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#c62c36"
    },
    logoutText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#c62c36"
    }
})