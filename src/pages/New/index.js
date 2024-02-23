import { View, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Header from "../../components/Header";
import { useState } from "react";
import RegisterType from "../../components/RegisterType";
import api from "../../services/api";
import format from "date-fns/format";
import { useNavigation } from "@react-navigation/native";

export default function New(){
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')
    const navigation = useNavigation();

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null){
            alert('Preencha todos os campos')
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
             {
                text: 'Cancelar',
                style: 'cancel',
             },
             {
                text: 'Continuar',
                onPress : () => handleAdd()
             }
            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })
        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.background}>
            <Header title="Registrar-se"/>

            <SafeAreaView style={{marginTop: 14, alignItems: "center"}}>

                <TextInput style={styles.input} placeholder="Descrição desse registro" value={labelInput} onChangeText={(text) => setLabelInput(text)}/>
                <TextInput style={styles.input} placeholder="Valor desejado" keyboardType="numeric" value={valueInput} onChangeText={(text) => setValueInput(text)}/>

                <RegisterType type={type} sendTypeChanged={(item) => setType(item)}/>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Registrar</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#f0f4ff'
    },
    input:{
        height: 50,
        width: '90%',
        backgroundColor: "#fff",
        fontSize: 17,
        paddingRight: 8, paddingLeft: 8,
        marginBottom: 14,
        borderRadius: 4
    },
    btn:{
        width: '90%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00b94a",
        borderRadius: 4,
    },
    btnText:{
        color: '#fff',
        fontSize: 21,
        fontWeight: "bold"
    }
})
