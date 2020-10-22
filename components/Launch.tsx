import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import { Link } from "@react-navigation/native";
import palette from "../styles/palette";
import commonStyle from "../styles/commonStyle";

interface LaunchProps {
  id: string | number;
  description: string;
}

export const Launch: React.FC<LaunchProps> = ({ id, description }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Link
        style={{ flex: 1 }}
        to={`/cases/${id}`}
        target={Platform.OS === "web" ? "_blank" : undefined}
      >
        <Text style={[commonStyle.h1, { fontSize: 40 }]}>{description}</Text>
      </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 340,
    backgroundColor: palette.darkBlue,
    padding: 20,
    margin: 3,
  },
});
