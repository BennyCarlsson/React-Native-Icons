import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Ionicons, FontAwesome } from "@expo/vector-icons"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <FontAwesome name="camera" size={50} color="black" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
