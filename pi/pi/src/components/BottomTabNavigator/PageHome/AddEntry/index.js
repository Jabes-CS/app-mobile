import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";

import styles from './styles';



export default function AddEntry({navigation}){

    const [preco, setPreco] = useState(null);
    const [dataCompra, setDataCompra] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [descricao, setDesc] = useState(null);
    const [message, setMessage] = useState(null);
    
    async function doEntry(){
    
        let reqs = await fetch('http//127.0.0.1:5000',{
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            preco:preco,
            data_compra:dataCompra,
            categoria:categoria,
            descricao:descricao
          })
        })
        
        let ress = await reqs.json();
        Keyboard.dismiss();
        if(ress){
          navigation.goBack();
        }else{
          setMessage('Não conseguimos efetuar sua atualização');
          setTimeout(()=>{
            setMessage(null);
          },3000);
        };
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
                            Descrição da Movimentação
                        </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={(text)=>setDesc(text)}
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