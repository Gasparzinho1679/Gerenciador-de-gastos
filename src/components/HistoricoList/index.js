import { View, StyleSheet, Text, TouchableWithoutFeedback, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({data,deleteItem}){

    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <View style={styles.container}>
                <View style={styles.tipo}>
                    <View style={[styles.iconView, {backgroundColor: data.type === 'receita' ? '#049301' : '#c62c36'}]}>
                        <Icon name={data.type === 'receita' ? 'arrow-up' : "arrow-down"} size={20} color="#fff" />
                        <Text style={styles.tipoText}>{data.type}</Text>
                    </View>
                </View>
                <Text style={styles.valorText}>R$:{data.value.toFixed(2)}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f0f3f0",
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 14,
        padding: 12
    },
    tipo:{
        flexDirection: "row",
    },
    tipoText:{
        color: '#fff',
        fontSize: 16,
        fontStyle: "italic"
    },
    iconView:{
        flexDirection: "row" ,
        backgroundColor: '#c62c36',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        marginBottom: 3
    },
    valorText:{
        color: "#121212",
        fontSize: 22
    }
})