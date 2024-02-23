import { View, StyleSheet, Text } from "react-native";
import { useMemo } from "react";

export default function BalanceItem({data}){

    const labelaName = useMemo(()=>{
        if(data.tag === "saldo"){
            return{
                label: "Saldo atual",
                color: "#3b3dbf"
            }
        }else if(data.tag === "receita"){
            return{
                label: "Entradas de hojê",
                color: "#00b93a"
            }
        }else{
            return{
                label: "Saídas de hojê",
                color: "#ef463a"
            }
        }

    }, [data])

    return(
        <View style={[styles.container, {backgroundColor: labelaName.color}]}>
            <Text style={styles.label}>{labelaName.label}</Text>
            <Text style={styles.balance}>R$: {data.saldo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 14,
        marginRight: 14,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        width: 300,
        paddingLeft: 14
    },
    label:{
        color: "#fff",
        fontSize: 19,
        fontWeight: "bold"
    },
    balance:{
        marginTop: 5,
        fontSize: 30,
        color: "#fff"
    }
})