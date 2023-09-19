import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Text } from "react-native-elements";

const data = Array.from({ length: 25 }, (_, i) => ({
  id: i.toString(),
  name: `User ${i + 1}`,
  message: `This is message #${i + 1}`,
  time: `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60)} ${
    Math.random() > 0.5 ? "AM" : "PM"
  }`,
  avatar: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
}));

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headingWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.topButton}>
          <Text style={styles.heading}>WhatCount</Text>
          <Text style={styles.heading1}>{count}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Avatar rounded source={{ uri: item.avatar }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
            </ListItem.Content>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: "gray" }}>{item.time}</Text>
            </View>
          </ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: 80,
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 25,
  },
  heading1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 2,
  },
  topButton: {
    alignItems: "center",
    color: "white",
  },
});
