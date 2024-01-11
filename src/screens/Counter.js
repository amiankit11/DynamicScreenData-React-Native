/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsyncWithValue,
  fetchDataAsync,
} from '../store/Reducer/counterSlice';
import { printHello } from '../store/Reducer/TestSlice';
import useCounter from '../CustomHook/CounterHook';
import NewComponent from '../HOC/OldComponent';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.value);

  const testPrint = useSelector((state) => state.test.value);

  const { counth, incrementCounter } = useCounter();
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'Counter : ' + counter}</Text>

      <NewComponent />
      <Text>{'Counter : ' + counter}</Text>
      <TouchableOpacity
        onPress={() => dispatch(increment(1))}
        style={{
          height: 50,
          justifyContent: 'center',
          margin: 10,
          elevation: 10,
        }}
      >
        <Text>increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(incrementAsyncWithValue(5))}
        style={{
          height: 50,
          justifyContent: 'center',
          margin: 10,
          elevation: 10,
        }}
      >
        <Text> async increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{
          height: 50,
          justifyContent: 'center',
          margin: 10,
          elevation: 10,
        }}
      >
        <Text>decrement</Text>
      </TouchableOpacity>

      <Text style={{ margin: 20 }}>Custom Hook</Text>
      <Text>{'Custom Hook counter : ' + counth}</Text>
      <TouchableOpacity onPress={() => incrementCounter()}>
        <Text>{'custom increment'}</Text>
      </TouchableOpacity>
      <Text style={{ margin: 10 }}>{testPrint}</Text>

      <TouchableOpacity
        onPress={() => dispatch(printHello('Print Hello'))}
        style={{
          height: 50,
          justifyContent: 'center',
          margin: 10,
          elevation: 10,
        }}
      >
        <Text>click to print Hello world</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
