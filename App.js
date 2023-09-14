import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
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
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>WhatsApp</Text>
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

    height: 50,
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
});
