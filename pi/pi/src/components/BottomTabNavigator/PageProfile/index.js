import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PersonScreen = () => {
  const [showBalance, setShowBalance] = useState(false);
  const user = {
    name: 'João Silva',
    agency: '1234',
    cpf: '123.456.789-00',
    balance: 'R$ 5,000.00',
    photo: 'https://www.example.com/user-photo.jpg', // substitua pelo URL da foto
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photo }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.detail}>Agência: {user.agency}</Text>
      <Text style={styles.detail}>CPF: {user.cpf}</Text>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.detail}>Saldo: </Text>
        {showBalance ? (
          <Text style={styles.balanceText}>{user.balance}</Text>
        ) : (
          <Text style={styles.balanceText}>****</Text>
        )}
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Text style={styles.toggleText}>{showBalance ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white', alignItems: 'center' },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  detail: { fontSize: 16, marginBottom: 5 },
  balanceContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  balanceText: { fontSize: 16, fontWeight: 'bold', marginRight: 8 },
  toggleText: { color: '#007bff' },
});

export default PersonScreen;
