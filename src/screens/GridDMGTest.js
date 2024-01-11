
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const data = [
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
  {
    clicked: false,
    order: 0,
  },
];

const GridDMGTest = () => {
  const [colorTiles, setColorTile] = useState(data);
  const [count, setCount] = useState(9);

  const onClick = (index) => {
    if (count == 0) {
      let tempCount = 1;
      setInterval(() => {
        let tempArray = [...colorTiles];
        for (let i = 0; i < tempArray.length; i++) {
          if (tempArray[i].order == tempCount) {
            tempArray[i].clicked = false;
            tempCount -= 1;
            break;
          }
        }
        setColorTile(tempArray);
      }, 1000);
      return;
    }

    if (colorTiles[index].clicked) {
      return;
    }

    let tempArray = [...colorTiles];

    tempArray[index].clicked = true;
    tempArray[index].order = count;
    setCount(count - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={colorTiles}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: item.clicked ? "green" : "red",
                height: 100,
                width: 100,
              }}
              onPress={() => onClick(index)}
            />
          );
        }}
        extraData={count}
      />
    </View>
  );
};

export default GridDMGTest;






