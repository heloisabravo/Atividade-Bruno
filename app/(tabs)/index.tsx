import React from "react";
import { StyleSheet, View } from "react-native";
import MeuHeader from "../../components/MeuHeader/MeuHeader";
import MeuCabecalho from "../../components/MeuCabecalho/MeuCabecalho";
import MeuCampoTexto from "../../components/MeuCampoTexto/MeuCampoTexto";
import MeuBotao from "../../components/MeuBotao/MeuBotao";
import PageViews from "../../components/PageView/PageView";

const App = () => {
  return (
    <View style={styles.container}>
      <MeuHeader>
        <MeuCabecalho uri_imagem="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" />
      </MeuHeader>

    <PageViews>
      <MeuCampoTexto label="Email" placeholder="Digite seu email" />
      <MeuCampoTexto label="Senha" placeholder="Digite sua senha" />
      <MeuBotao title="Entrar" />
      </PageViews>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;