import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import dynamicDataArray from "../constant/dynamic";
import DynamicItemComponent from "../Component/DynamicItemComponent";

const Home = () => {
  return (
    <View style={{padding:20}}>
      <FlatList
        data={dynamicDataArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DynamicItemComponent componentData={item} />}
      />
    </View>
  );
};

export default Home;
