import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import palette from "../styles/palette";

interface DialogProps {
  active: boolean;
  onDismiss: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  active,
  onDismiss,
  children,
}) => {
  return (
    <View testID="overlay" style={styles.overlay}>
      <View testID="centeredView" style={styles.centeredView}>
        <Modal
          animationType="fade"
          presentationStyle="overFullScreen"
          transparent={true}
          visible={active}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View testID="modalView" style={styles.modalView}>
            {children}

            <TouchableHighlight
              style={{ backgroundColor: "#2196F3", padding: 10, width: 200 }}
              onPress={onDismiss}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    zIndex: 20,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(92, 103, 125, .6)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 10,
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
