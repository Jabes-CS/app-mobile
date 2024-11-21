import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, Switch, TouchableOpacity, Touchable } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import styles from "./styles";


export default function SignUp({navigation}){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (value) => setIsEnabled(value);

    const [nome, setNome] = useState(null);
    const [senha, setSenha] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [data_nasc, setDataNasc] = useState(null);
    const [data_pag, setDataPag] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [cep, setCep] = useState(null);
    const [salario, setSalario] = useState(null);
    const [profissao, setProfissao] = useState(null);
    const [investir, setInvestir] = useState(false);

    const [message, setMessage] = useState(null);


    async function registerUser(){
                                // ROTA PARA O SERVIDOR
        let reqs = await fetch('http://10.0.0.105:5000/usuario/cadastro2' ,{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body: JSON.stringify({
                nome: nome,
                data_nasc: data_nasc,
                telefone:telefone,
                email:email,
                senha:senha,
                cpf:cpf,
                cep:cep,
                salario:salario,
                data_salario:data_pag,
                credito_disponivel:salario,
                profissao:profissao,
                deseja_investir:investir
            })
        });
        let ress = await reqs.json();

        
        
        setMessage(ress.message);
        console.log(ress.message);
        if (ress.statusCode == 200){
            navigation.goBack();
        }
        
    }

    return(
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.logoMain}>
                    <Image 
                    source={require('../../img/logo-small.png')}
                    />
                </View>
                <View>

                    <Text style={styles.phraseSignUp}>
                        Conheça seu mais novo cérebro financeiro.
                    </Text>

                    {message && (
                        <Text>{message}</Text>
                    )}

                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Sem Abreviações"
                        onChangeText={(text)=>setNome(text)}
                    />

                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="DD/MM/AAAA" 
                        onChangeText={(text)=>setDataNasc(text)}
                    />

                    <Text style={styles.label}>Telefone</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: 05519988887777" 
                        onChangeText={(text)=>setTelefone(text)}
                    />

                    <Text style={styles.label}>CPF</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: 30911244844" 
                        onChangeText={(text)=>setCpf(text)}
                    />

                    <Text style={styles.label}>CEP</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: 13185034" 
                        onChangeText={(text)=>setCep(text)}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: carlos.augusto@gmail.com" 
                        keyboardType="email-address" 
                        onChangeText={(text)=>setEmail(text)}
                    />


                    <Text style={styles.label}>Profissão</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: Estudante" 
                        onChangeText={(text)=>setProfissao(text)}
                    />

                    <Text style={styles.label}>Valor de Salário</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: 1000"
                        onChangeText={(text)=>setSalario(text)}
                    />

                    <Text style={styles.label}>Data de Pagamento</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: DD/MM/AAAA" 
                        onChangeText={(text)=>setDataPag(text)}
                    />

                    <Text style={styles.label}>Deseja Investir?</Text>
                    
                    <SafeAreaProvider>
                        <SafeAreaView  style={styles.switch}>
                            <Switch
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                isEnabled = {setInvestir}
                            />
                        </SafeAreaView>
                    </SafeAreaProvider>

                    
                        


                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha" 
                        secureTextEntry
                        onChangeText={(text)=>setSenha(text)}
                    /> 

                    <Text style={styles.label}>Confirme a Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry />                
                </View>

                <TouchableOpacity style={styles.button} onPress={registerUser}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}