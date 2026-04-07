import React from "react";
import { View, Image, StyleSheet } from "react-native";


type MeuCabecalho = {
  uri_imagem: string;
};

const MeuCabecalho = ({ uri_imagem }: MeuCabecalho) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: uri_imagem }}
        style={styles.imagem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    justifyContent: "center",
  
  },

  imagem: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
export default MeuCabecalho;