import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { receiveTime } from '../store/Reducer/TestSlice';

const TabTwo = () => {
  const dispatch = useDispatch();

  const testPrint = useSelector((state) => state.test.value);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: 200, height: 40,color:"red" }}
        placeholderTextColor={"red"}
        onChangeText={(num) => {
          dispatch(receiveTime(num));
        }}
        placeholder="enter Time Duration"
        keyboardType="numeric"
      />
      <Text>Dummy</Text>
    </View>
  );
};

export default TabTwo;
