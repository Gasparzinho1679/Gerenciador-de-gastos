import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Header({title}){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            
            <TouchableOpacity style={styles.btnMenu} onPress={()=> navigation.openDrawer()}>
                <Icon name="menu" size={35} color="#121212"/>
            </TouchableOpacity>

            {title && (<Text style={styles.title}>{title}</Text>)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 15,
        width: "100%",
    },
    title:{
        fontSize: 22,
        marginLeft: 8
    },
    btnMenu:{
        justifyContent: "center",
        alignItems: "center"
    }
})