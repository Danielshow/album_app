import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "pink",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff",
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Button;
