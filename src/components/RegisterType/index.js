import { View, StyleSheet, Text, TouchableOpacity,} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export default function RegisterType({type, sendTypeChanged}){
    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name){
        if(name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita')
        }else{
            setTypeChecked('despesa'),
            sendTypeChanged('despesa')
        }
    }

    return(
        <View style={styles.registerContainer}>
            <TouchableOpacity style={[styles.registerBtn, {backgroundColor: typeChecked === "receita" ? "#fff" : "#efefef", borderColor: typeChecked === 'receita' ? "#3b3dbf" : 'transparent'}]} onPress={()=> changeType('receita')}>
                <Icon name="arrow-up" size={25} color="#121212"/>
                <Text style={styles.labelBtn}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.registerBtn, {backgroundColor: typeChecked === "despesa" ? "#fff" : "#efefef", borderColor: typeChecked === 'despesa' ? "#3b3dbf" : 'transparent'}]} onPress={()=> changeType('despesa')}>
                <Icon name="arrow-down" size={25} color="#121212"/>
                <Text style={styles.labelBtn}>Dispesa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer:{
        flexDirection: "row",
        width: "100%",
        paddingLeft: "5%", paddingRight: "5%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    registerBtn:{
        backgroundColor: "#e7e7e7",
        width: "47%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        flexDirection: "row",
        height: 45,
        borderWidth: 1,
        marginBottom: 14
    },
    labelBtn:{
        marginLeft: 8,
        fontSize: 17
    }
})