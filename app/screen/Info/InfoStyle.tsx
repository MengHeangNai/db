import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5', // change the background color
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333', // change the title color
    },
    input: {
      height: 40,
      borderColor: '#ddd', // change the border color
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 5, // add border radius
      backgroundColor: '#fff', // change the background color
    },
    errorText: {
      color: 'red', // change the color of the error text
      marginBottom: 10, // add some margin at the bottom
    },
  });