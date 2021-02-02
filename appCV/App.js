import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './android/app/src/assets/perfil.jpg';

const App = () => {

  function handleRedeSocial(rede_social) {
    
    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/lucasrmagalhaes')
      break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/darosamagalhaes')
      break
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/lucasrmagalhaes')
      break
    }
  }

  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>LUCAS MAGALHÃES</Text>
          <Text style={style.funcao}>Desenvolvedor JR.</Text>
          <View style={style.redes_sociais} >
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Experiência Profissional</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>Desenvolvedor JR.</Text>
                <Text style={style.card_content_text}>Técnico de Manutenção JR.</Text>
                <Text style={style.card_content_text}>Manutenção e Suporte em Informática</Text>
              </View>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Formação Acadêmica</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>Sistemas para Internet</Text>
                <Text style={style.card_content_text}>Técnico em Informática</Text>
              </View>
            </View>
          </View>

      </View>
    </>
  );
};

const style = StyleSheet.create ({
  
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: '75%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_content: {
    marginTop: 10
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }

})

export default App;