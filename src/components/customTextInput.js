import React from "react";
import PropTypes from "prop-types";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
} from "react-native";

const CustomTextInput = ({
    placeholder,
    onChange,
    text,
    multiline,
    numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        defaultValue={text}
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  text: PropTypes.string,
  multiline: PropTypes.bool.isRequired,
  numberOfLines: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

CustomTextInput.defaultProps = {
  text: "",
};

export default CustomTextInput;