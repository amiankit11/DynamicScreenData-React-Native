import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Toast from "react-native-toast-message";

const CarouselViewComponent = ({ data }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemClick = (item) => {
    // Show toast here
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Item Clicked!",
      text2: `You clicked on ${item.label}`,
    });
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      layout="default"
      loop
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default CarouselViewComponent;
