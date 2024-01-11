/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { Alert, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const TabOne = () => {
  const timeDuration = useSelector((state) => state.test.value);

  const [startTime, setStartTime] = useState();
  const [powerOnTime, setPowerOnTime] = useState();

  const lookForValidation = () => {
    if (startTime != "" && powerOnTime != "") {
      let sum = parseInt(startTime) + parseInt(powerOnTime);
      console.log('kjbjkbj', startTime, powerOnTime, timeDuration, sum);

      if (sum > parseInt(timeDuration)) {
        Alert.alert("Sum of start and powertime is greater than time duration");
      }
    }
  };

  useEffect(() => {
    lookForValidation();
  }, [startTime, powerOnTime]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: 200, height: 40 ,color:"red"}}
        onChangeText={(num) => {
          setStartTime(num);
        }}
        value={startTime}
        placeholderTextColor={"red"}
        placeholder="enter Start Number"
        keyboardType="numeric"
      />
      <TextInput
        style={{ width: 200, height: 40, marginTop: 20,color:"red" }}
        onChangeText={(num) => {
          setPowerOnTime(num);
        }}
        placeholderTextColor={"red"}
        value={powerOnTime}
        placeholder="enter Power on time"
        keyboardType="numeric"
      />
    </View>
  );
};

export default TabOne;
