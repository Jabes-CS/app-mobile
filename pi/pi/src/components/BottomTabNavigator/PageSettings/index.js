import React, { useState } from 'react';
import { View, Text, Switch, Button, Alert } from 'react-native';

import styles from './styles';

export default function SettingsScreen({navigation}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleSwitch = (value) => setIsDarkMode(value);
  const toggleNotifications = (value) => setIsNotificationsEnabled(value);

  const handleProfileChange = () => {
    // Implementar a lógica para mudar a foto de perfil
    Alert.alert('Alteração de Foto', 'Aqui você pode mudar sua foto de perfil.');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Você foi desconectado do aplicativo.');
    navigation.navigate('Login');
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
        <Text style={styles.aboutText}>Desenvolvido por: Equipe Unplanned</Text>
      </View>
    </View>
  );
}


