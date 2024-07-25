import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [input, setInput] = useState(""); // Initialize input variable
  const onButtonPressed = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the expression
      } catch (error) {
        setInput("error");
        setTimeout(() => {
          setInput(""); // Clear input after second delay delay
        }, 1000); 
      }
    } else if (value === "c") {
      setInput(""); // Clear input
    } else {
      setInput(input + value); // Concatenate input
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>
          {input}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {["c", "+-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={item === "=" ? styles.equalsButton : styles.button}
              onPress={() => onButtonPressed(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a384c",
    padding: 10,
    borderColor:"#5700e9",
    borderWidth:5,
  },
  screenContainer: {
    flex:1,
    width:"100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#009c55",
    borderRadius: 20,
    marginBottom: 15,//from the buttons
  },
  screenText: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  buttonsContainer: {
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: 85,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e800ce",
    margin: 2,
    borderRadius: 85,
    borderColor: "#3a384c",
    borderWidth:10,
  },
  equalsButton: {
    flex:1,
    height:60 ,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0000",
    borderRadius: 70,
  },
  buttonText: {
    fontSize: 30,
    color: "#FFFFFF",
  }
});