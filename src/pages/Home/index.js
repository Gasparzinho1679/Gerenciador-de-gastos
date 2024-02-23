import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Modal} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import api from "../../services/api";
import {format} from "date-fns"
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

export default function Home(){
    const {signOut, user} = useContext(AuthContext)
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviments, setDateMoviments] = useState(new Date())
    const [list, setList] = useState([])
    const [moviments, setMoviments] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
      let isActive = true;

      async function getMoviments(){
        let date = new Date(dateMoviments)
        let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000

        let dateFormated = format(onlyDate, 'dd/MM/yyyy')

        const receives = await api.get('/receives', {
          params:{
            date: dateFormated
          }
        })

        const balance = await api.get('/balance', {
          params:{
             date: dateFormated
          }
        })

        if(isActive){
          setMoviments(receives.data)
          setListBalance(balance.data);
        }
      }

      getMoviments();

      return () => isActive = false;

    },[isFocused, dateMoviments])

    async function handleDelete(id){
      try{
        await api.delete('/receives/delete', {
          params:{
            item_id: id
          }
        })

        setDateMoviments(new Date())
        
      }catch(err){
        console.log(err);
      }
    }

    function filterDateMoviments(dateSelected){
      setDateMoviments(dateSelected)
    }

    return(
      <SafeAreaView style={styles.background}>
        <Header title="Minhas movimentações"/>

        <FlatList style={styles.listbalance} data={listBalance} horizontal={true} showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag} renderItem={({item}) => (<BalanceItem data={item}/>)} />

        <View style={styles.area}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="event" color='#121212' size={30}/>
          </TouchableOpacity>
          <Text style={styles.title}>Ultimas movimentações</Text>
        </View>

        <FlatList style={styles.list} contentContainerStyle={{paddingBottom: 20}} showsVerticalScrollIndicator={false} data={moviments} keyExtractor={item => item.id}
        renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDelete}/> }/>

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <CalendarModal  setVisible={() => setModalVisible(false)} handleFilter={filterDateMoviments}/>
        </Modal>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#f0f4ff"
    },
    listbalance:{
      maxHeight: 190
    },
    area:{
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flexDirection: "row",
      paddingLeft: 14,
      paddingRight: 14,
      alignItems: "baseline",
    },
    title:{
      marginLeft: 4,
      color: "#121212",
      marginBottom: 14,
      fontWeight: "bold",
      fontSize: 18
    },
    list:{
      flex:1,
      backgroundColor: "#fff",
    }
})