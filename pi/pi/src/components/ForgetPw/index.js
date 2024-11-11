import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function ForgetPw({navigation}){
    return(
      <View style={styles.container}>
        <View style={styles.logoMain}>
          <Image 
          source={require('../../img/logo-small.png')}
          />
        </View>

        <Text style={styles.phraseForgetPw}>
            Coloque seu e-mail abaixo e receba um link para alterar sua senha.
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="exemplo@gmail.com" />

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Enviar E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Enviar de novo</Text>
        </TouchableOpacity>
      </View>
    );
}