import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

export default function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [stage, setStage] = useState(0);
  const [userName, setUserName] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Adiciona a mensagem do cliente à história do chat
      setChatHistory([...chatHistory, { sender: 'client', text: message }]);

      // Resposta do bot
      setTimeout(() => {
        let botMessage = '';
        if (stage === 0) {
          setStage(1);
          botMessage = 'Qual é o seu nome?';
        } else if (stage === 1) {
          setUserName(message);
          setStage(2);
          const currentHour = new Date().getHours();
          const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';
          botMessage = `${greeting}, ${message}! Como posso ajudar? Escolha uma das opções:\n` +
            "1- O que é gestão financeira?\n" +
            "2- Como melhorar minha gestão financeira\n" +
            "3- Como repartir meu salário corretamente para poder investir\n" +
            "4- Recomende 5 livros de finanças\n" +
            "5- Tigrinho da dinheiro?";
        } else if (stage === 2) {
          switch (message) {
            case '1':
              botMessage = "Gestão financeira é o processo de planejar, controlar e monitorar os recursos financeiros para alcançar os objetivos.";
              break;
            case '2':
              botMessage = "Para melhorar sua gestão financeira, comece estabelecendo metas claras, criando um orçamento, e monitorando seus gastos regularmente.";
              break;
            case '3':
              botMessage = "Recomenda-se dividir seu salário entre despesas essenciais, poupança, investimentos, e lazer, buscando equilíbrio e disciplina financeira.";
              break;
            case '4':
              botMessage = "Aqui estão cinco livros recomendados: 'Pai Rico, Pai Pobre' de Robert Kiyosaki, 'O Homem Mais Rico da Babilônia' de George S. Clason, 'Os Segredos da Mente Milionária' de T. Harv Eker, 'Investimentos Inteligentes' de Gustavo Cerbasi e 'A Psicologia Financeira' de Morgan Housel.";
              break;
            case '5':
              botMessage = "Não, tigrinhos não dão dinheiro. Concentre-se em educação financeira e investimentos reais para construir sua independência financeira.";
              break;
            default:
              botMessage = "Opção inválida. Por favor, escolha um número de 1 a 5.";
              break;
          }
        }
        setChatHistory(prev => [...prev, { sender: 'bot', text: botMessage }]);
      }, 1000);

      // Limpar o campo de mensagem
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatBot</Text>
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View key={index} style={styles.chatBubbleContainer}>
            <View
              style={[
                styles.chatBubble,
                chat.sender === 'bot' ? styles.botBubble : styles.clientBubble,
              ]}
            >
              <Text style={[styles.chatText, chat.sender === 'client' && styles.clientText]}>
                {chat.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Digite uma mensagem"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


