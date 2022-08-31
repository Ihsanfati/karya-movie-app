import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize,
  width,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  width: PropTypes.node,
};

CustomButton.defaultProps = {
  fontSize: 16,
  width: 100,
};

export default CustomButton;