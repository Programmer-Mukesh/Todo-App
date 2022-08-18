import { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from "react-native";
import AddTodo from "./Components/addList";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "learn react-native", key: "2" },
    { text: "watch Naruto", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (inputText) => {
    setTodos([{ text: inputText, key: Math.random().toString() }, ...todos]);
  };

  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight, flex:1}}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeading}>ToDo List</Text>
        </View>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

//light bro - #83835f

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    padding: 30,
    backgroundColor: "#212975",
    alignItems: "center",
  },
  navBarHeading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    marginTop: 30,
    flex: 1,
  },
});
