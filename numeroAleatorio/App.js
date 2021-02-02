import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(0)
  
  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 1000)
    setNumero(novo_numero)
  }

  return (
      <SafeAreaView style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text style={style.texto}>Gerar Número</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    fontSize: 40,
    fontWeight: 'bold',
    flex: 1, /** Pega a tela inteira. */
    justifyContent: 'center',
    alignItems: 'center'
  },
  numero: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})

export default App;