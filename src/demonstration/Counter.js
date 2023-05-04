import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log("Our count is now");
    return () => {
      console.log("Cleanup crew");
    };
  }, [count]);
  const { container, title } = styles;
  return (
    <View style={container}>
      <Text style={title}>Count: {count}</Text>
      <Button
        color={"purple"}
        title="Increase Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        color={"green"}
        title="Decrease Count"
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Button
        color={"purple"}
        title="Increase Count"
        onPress={() => {
          setNewCount(count + 1);
        }}
      />
      <Button
        color={"green"}
        title="Decrease Count"
        onPress={() => {
          setNewCount(count - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bakcgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});

export default Counter;
