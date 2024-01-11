import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ImageWithText from "./ImageWithTextComponent";
import ImageWithTextComponent from "./ImageWithTextComponent";
import Toast from 'react-native-toast-message';

const TabWithImageComponent = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data[0]); // Initialize with the first tab

  const handleTabPress = (tabItem) => {
    setSelectedTab(tabItem);
    console.log("jkbnkj")
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: `Selected Tab: ${tabItem.label}`,
    });
  };

  useEffect(() => {
    setSelectedTab(data[0]);
  }, []);

  return (
    <View style={{backgroundColor:'black',borderRadius:10,overflow:'hidden',marginTop:20,paddingBottom:10}}>
    <ImageBackground
      source={{ uri: selectedTab.background_image_source }}
      style={styles.tabBackground}
      resizeMode="cover"
    >
    <View style={styles.contentContainer}>

      <FlatList
        data={data}
        style={{position:'absolute'}}
        renderItem={({ item:tabItem }) => (
          <TouchableOpacity onPress={() => handleTabPress(tabItem)}>
            <View style={[styles.tabItem, selectedTab === tabItem && styles.selectedTabItem]}>
              <Text style={styles.tabItemLabel}>{tabItem.label}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id + ''}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
    </ImageBackground>
    {selectedTab && <ImageWithTextComponent data={selectedTab.items.data} />}

    </View>
  );
};

const styles = StyleSheet.create({
  tabBackground: {
    flex: 1,
    marginBottom: 10,
    padding: 20,
    justifyContent: 'flex-end', 
    height:200
  },
  contentContainer: {
    padding:20
  },
  tabItem: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  selectedTabItem: {
    backgroundColor: "red",
  },
  tabItemImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  tabItemLabel: {
    textAlign: "center",
  },
  imageWithTextContainer: {
    marginTop: 10,
  },
  imageWithTextItem: {
    marginRight: 10,
    alignItems: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 8,
  },
  itemLabel: {
    textAlign: "center",
  },
  carouselViewItem: {
    marginRight: 10,
    alignItems: "center",
  },
});

export default TabWithImageComponent;
