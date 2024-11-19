import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import styles from './style'



export default function LoginScreen({navigation}){

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [message, setMessage] = useState(null);

  async function doLogin(){

    let reqs = await fetch('http//127.0.0.1:5000/usuario/login',{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
      },
      body: JSON.stringify({
        email:email,
        senha:senha,
      })
    })
    
    let ress = await reqs.json();
    Keyboard.dismiss();
    if(ress){
      navigation.navigate('BottomTabNavigator');
    }else{
      setMessage('Usuário e/ou senha incorretos!');
      setTimeout(()=>{
        setMessage(null);
      },3000);
    };
  }

    return(
      <View style={styles.container}>
        <View style={styles.logoMain}>
          <Image 
          source={require('../../img/logo-small.png')}
          />
        </View>

        {message &&(
          <Text style={styles.messageError}>{message}</Text>
        )}

        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input} 
          placeholder="exemplo@gmail.com" 
          keyboardType="email-address" 
          onChangeText={(text)=>setEmail(text)}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input} 
          placeholder="senha123" 
          secureTextEntry 
          onChangeText={(text)=>setSenha(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BottomTabNavigator')}>
          <Text style={styles.buttonText}>Entrar SEM LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={doLogin}
        >
          <Text style={styles.buttonText}>Entrar TESTE BANCO</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link} onPress={() => navigation.navigate('ForgetPw')}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    );
}