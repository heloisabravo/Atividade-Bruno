import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type MeuCampoTexto = {
  label: string;
  placeholder: string;
};

const MeuCampoTexto = ({ label, placeholder }: MeuCampoTexto) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:15,
  
  },
  label: {
   color: "#000",
  fontSize: 14,
  marginBottom: 4,
  },
  input: {
    height: 40, 
  borderColor: "#ffffff",
  borderWidth: 1,
  borderRadius: 6,
  fontSize: 14,
  color: "#ffffff",
  paddingHorizontal: 10, 
  backgroundColor: "#d8cccc",
},
});



export default MeuCampoTexto;