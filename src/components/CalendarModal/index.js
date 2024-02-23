import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import {Calendar, LocaleConfig} from 'react-native-calendars'
import { useState } from "react";

export default function CalendarModal({ setVisible, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date())
  const [markedDates, setmarkedDates] =  useState({})

  function handleOnDayPresss(date){
    setDateNow(new Date(date.dateString))

    let markeddate = {}

    markeddate[date.dateString] = {
      selected: true,
      selectedColor: "#3d3bdf",
      textColor: "#fff"
    }

    setmarkedDates(markeddate)

  }

  function handleFilterDate(){
    handleFilter(dateNow)
    setVisible();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1, backgroundColor: 'rgba(34,34,34,0.4)'}}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>

        <Calendar onDayPress={handleOnDayPresss} markedDates={markedDates} enableSwipeMonths={true} theme={{
          todayTextColor: "#ff0000",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#fff"
        }}/>

        <TouchableOpacity style={styles.btnFilter} onPress={handleFilterDate}>
            <Text style={styles.btnText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContent: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: '#fff',
    padding: 14,
  },
  btnFilter:{
    borderRadius: 4,
    backgroundColor: '#3b3dbf',
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText:{
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold"
  }
});
