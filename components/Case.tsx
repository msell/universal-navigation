import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";

interface CaseProps {
  id: string | number;
}

export const Case: React.FC<CaseProps> = ({ id }) => {
  return (
    <Link
      to={`/CaseDetails?id=${id}`}
      target={Platform.OS === "web" ? "_blank" : undefined}
    >
      <TouchableOpacity style={styles.container}>
        <Text>{`Case ${id}`}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 340,
    backgroundColor: "#a8dadc",
    padding: 20,
    margin: 3,
  },
});
