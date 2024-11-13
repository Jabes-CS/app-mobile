import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button, Alert } from 'react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleSwitch = (value) => setIsDarkMode(value);
  const toggleNotifications = (value) => setIsNotificationsEnabled(value);

  const handleProfileChange = () => {
    // Implementar a lógica para mudar a foto de perfil
    Alert.alert('Alteração de Foto', 'Aqui você pode mudar sua foto de perfil.');
  };

  const handleLogout = () => {
    // Implementar a lógica de logout
    Alert.alert('Logout', 'Você foi desconectado do aplicativo.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* Tema (Modo Claro / Escuro) */}
      <View style={styles.settingRow}>
        <Text style={styles.text}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
        />
      </View>

      {/* Notificações */}
      <View style={styles.settingRow}>
        <Text style={styles.text}>Notificações</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Foto de Perfil */}
      <Button title="Alterar Foto de Perfil" onPress={handleProfileChange} />

      {/* Logout */}
      <Button title="Sair" onPress={handleLogout} color="red" />

      {/* Sobre */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Versão 1.0.0</Text>
        <Text style={styles.aboutText}>Desenvolvido por: Seu Nome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18 },
  settingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  aboutContainer: { marginTop: 20, alignItems: 'center' },
  aboutText: { fontSize: 16, color: '#888' }
});
