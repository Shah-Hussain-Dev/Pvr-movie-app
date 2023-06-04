import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Date from "./Date";
import moment from "moment/moment";

const Calender = ({selected,onSelectDate}) => {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    getDates();
  },[])
  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 20; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
};

  return (
    <View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
        {dates.map((date,index)=>(
            <Date date={date} key={index} selected={selected} onSelectDate={onSelectDate}/>
        ))}
     </ScrollView>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({});
