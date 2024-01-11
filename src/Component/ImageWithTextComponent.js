import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

const ImageWithTextComponent = ({ data }) => {
  const handleItemClick = (label) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: `Clicked on item: ${label}`,
    });
  };

  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemClick(item.label)}>
            <View key={item.id} style={{justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60,backgroundColor:"white",borderRadius:30 }}
              />
              <Text>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ImageWithTextComponent;
