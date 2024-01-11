import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import TabWithImageComponent from "./TabWithImageComponent";
import CarouselViewComponent from "./CarouselViewComponent";
import ImageWithTextComponent from "./ImageWithTextComponent";

const DynamicItemComponent = ({ componentData }) => {
  const { component_type, data } = componentData;

  switch (component_type) {
    case "IMAGE_WITH_TEXT":
      return <ImageWithTextComponent data={data} />;
    case "CAROUSEL_VIEW":
      return <CarouselViewComponent data={data} />;
    case "TAB_WITH_IMAGE":
      return <TabWithImageComponent data={data} />;
    default:
      return null;
  }
};

export default DynamicItemComponent;
