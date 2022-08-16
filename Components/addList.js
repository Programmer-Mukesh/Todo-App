import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const handleInput = (input) => {
    setText(input);
  };

  const onPressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Add new task...."
        onChangeText={handleInput}
        style={styles.input}
        value={text}
      />
      <Button color="coral" title="Add Task" onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 18,
  },
});
