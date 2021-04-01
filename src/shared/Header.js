import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
  },
  subHeader: { flexDirection: "row" },
});
