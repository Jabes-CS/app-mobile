import React, { useState } from "react";
import { View, Text, Image, TextInput, Switch, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import styles from "./styles";


export default function SignUp({navigation}){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        
        <ScrollView style={styles.container}>
            <View style={styles.logoMain}>
                <Image 
                source={require('../../img/logo-small.png')}
                />
            </View>
            <View>

                <Text style={styles.phraseSignUp}>
                    Conheça seu mais novo cérebro financeiro.
                </Text>

                <Text style={styles.label}>Nome Completo</Text>
                <TextInput style={styles.input} placeholder="Sem Abreviações" />

                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput style={styles.input} placeholder="DD/MM/AAAA" />

                <Text style={styles.label}>Telefone</Text>
                <TextInput style={styles.input} placeholder="Ex: 05519988887777" />

                <Text style={styles.label}>CPF</Text>
                <TextInput style={styles.input} placeholder="Ex: 30911244844" />

                <Text style={styles.label}>CEP</Text>
                <TextInput style={styles.input} placeholder="Ex: 13185034" />

                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="Ex: carlos.augusto@gmail.com" keyboardType="email-address" />


                <Text style={styles.label}>Profissão</Text>
                <TextInput style={styles.input} placeholder="Ex: Estudante" />

                <Text style={styles.label}>Valor de Salário</Text>
                <TextInput style={styles.input} placeholder="Ex: 1000" />

                <Text style={styles.label}>Data de Pagamento</Text>
                <TextInput style={styles.input} placeholder="Ex: DD/MM/AAAA" />

                <Text style={styles.label}>Deseja Investir?</Text>
                <SafeAreaProvider>
                    <SafeAreaView style={styles.switch}>
                        <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </SafeAreaView>
                </SafeAreaProvider>
                    


                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry /> 

                <Text style={styles.label}>Confirme a Senha</Text>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry />                
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}