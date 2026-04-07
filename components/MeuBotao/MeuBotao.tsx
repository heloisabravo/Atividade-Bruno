import React from "react";
import { View, Button, StyleSheet } from "react-native";

type MeuBotao= {
  title: string;
};

const MeuBotao = ({ title }: MeuBotao) => {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    borderRadius: 6,
  },


});

export default MeuBotao;