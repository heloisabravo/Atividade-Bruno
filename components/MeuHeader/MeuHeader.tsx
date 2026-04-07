import React from "react";
import { View, StyleSheet } from "react-native";

type MeuHeader= {
  children: React.ReactNode;
};

const MeuHeader = ({ children }: MeuHeader) => {
  return <View style={styles.pagina}>{children}</View>;
};

const styles = StyleSheet.create({
  pagina: {
    width: "100%",
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040424",
  },
});
export default MeuHeader;