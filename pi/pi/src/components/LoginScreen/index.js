import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style'

export default function LoginScreen({navigation}){
    return(
      <View style={styles.container}>
        <View style={styles.logoMain}>
          <Image 
          source={require('../../img/logo-small.png')}
          />
        </View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="exemplo@gmail.com" keyboardType="email-address" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="senha123" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    );
}