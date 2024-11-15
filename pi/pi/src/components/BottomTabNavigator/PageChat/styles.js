import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop:50,
      backgroundColor: '#e5ddd5', // Fundo do app, estilo mais neutro
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#128C7E', // Cor semelhante ao WhatsApp
    },
    chatContainer: {
      flex: 1,
      marginBottom: 20,
    },
    chatBubbleContainer: {
      flexDirection: 'row',
      marginBottom: 15,
      justifyContent: 'flex-start', // O alinhamento será ajustado conforme o remetente
    },
    chatBubble: {
      padding: 15,
      borderRadius: 20,
      maxWidth: '75%',
      fontSize: 16,
      marginBottom: 10,
      flexShrink: 1,  // Faz com que o balão não ocupe toda a largura
    },
    clientBubble: {
      backgroundColor: '#d1f7c4',  // Cor clara para o cliente
      alignSelf: 'flex-end',  // Alinha à direita
      marginLeft: 10,
      marginRight: 0,
    },
    botBubble: {
      backgroundColor: '#128C7E',  // Cor do bot
      alignSelf: 'flex-start',  // Alinha à esquerda
      marginLeft: 0,
      marginRight: 10,
    },
    chatText: {
      color: '#fff',  // Texto branco dentro dos balões
      fontSize: 16,
    },
    clientText: {
      color: '#000',  // Texto preto para o cliente
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingVertical: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      padding: 12,
      marginRight: 10,
      borderColor: '#ccc',
      borderRadius: 20,
      backgroundColor: '#fff',
      fontSize: 16,
    },
    sendButton: {
      backgroundColor: '#128C7E', // Cor do botão igual ao WhatsApp
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    sendButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;