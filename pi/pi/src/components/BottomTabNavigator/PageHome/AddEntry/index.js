import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from './styles';



export default function AddEntry({navigation}){

    const [preco, setPreco] = useState(null);
    const [dataCompra, setDataCompra] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [nome_empresa, setNomeEmpresa] = useState(null);
    const [message, setMessage] = useState(null);
    
    async function doEntry(){
    
        let reqs = await fetch('http://10.0.0.105:5000/extrato/adicionar',{
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            nome_empresa:nome_empresa,
            preco:preco,
            data_compra:dataCompra,
            categoria:categoria,
            
          })
        })
        
        let ress = await reqs.json();
        console.log(ress.statusCode);
        setMessage(ress.message);
        if(ress.statusCode == 200){
          navigation.goBack();
        }
    }

    return(
        <ScrollView>
            <TouchableWithoutFeedback>
                 <View style={styles.container}>
                    <Text style={styles.mainText}>
                        "Se for pra gastar que seja com sabedoria"
                    </Text>

                    {message &&(
                        <Text style={styles.messageError}>{message}</Text>
                    )}

                    <View>
                        <Text style={styles.label}>
                            Estabelecimento
                        </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text)=>setNomeEmpresa(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Data da Movimentação
                        </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text)=>setDataCompra(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Categoria
                        </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text)=>setCategoria(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>
                            Valor
                        </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text)=>setPreco(text)}
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.buttonOk}
                        onPress={doEntry}
                    >
                        <Text style={styles.buttonOkText}>Concluído</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonCancel}
                        onPress={()=> navigation.goBack()}
                    >
                        <Text style={styles.buttonCancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
        
    );
}

export {AddEntry};