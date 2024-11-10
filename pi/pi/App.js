import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="exemplo@gmail.com" keyboardType="email-address" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="senha123" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainApp')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

function ContaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>
      <Text>Informações da conta vão aqui.</Text>
    </View>
  );
}

function ExtratoScreen() {
  const [tab, setTab] = useState('Entrada');

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.header}>
        <Text style={styles.title}>Extrato</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.reminderButton}>
            <Text style={styles.buttonText}>Lembrete Pagamento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.buttonText}>Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setTab('Entrada')} style={[styles.tab, tab === 'Entrada' && styles.activeTab]}>
          <Text style={styles.tabText}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('Saída')} style={[styles.tab, tab === 'Saída' && styles.activeTab]}>
          <Text style={styles.tabText}>Saída</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {tab === 'Entrada' ? (
          <View>
            <StatementItem title="Salário" date="10/out" amount="R$ 1.000,00" type="income" />
            <StatementItem title="Pix de Gabriel" date="09/out" amount="R$ 10,00" type="income" />
            <StatementItem title="Transporte" date="01/out" amount="R$ 150,00" type="income" />
          </View>
        ) : (
          <View>
            <StatementItem title="Outback" date="11/out" amount="R$ 100,00" type="expense" />
            <StatementItem title="Louis Vitton" date="28/set" amount="R$ 10.000,00" type="expense" />
            <StatementItem title="Gasolina" date="28/set" amount="R$ 350,00" type="expense" />
          </View>
        )}
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>Ver mais</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function ProfileHeader() {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      <View>
        <Text style={styles.profileName}>Nome da Pessoa</Text>
        <Text style={styles.profileBalance}>Saldo: R$ 5.000,00</Text>
      </View>
    </View>
  );
}

function StatementItem({ title, date, amount, type }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.itemImage} />
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDate}>{date}</Text>
      </View>
      <Text style={[styles.itemAmount, type === 'income' ? styles.income : styles.expense]}>
        {amount}
      </Text>
    </View>
  );
}

function BottomTabNavigator({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('Conta');

  return (
    <View style={styles.bottomTabContainer}>
      {['home', 'person', 'chatbubble', 'camera', 'settings'].map((icon, index) => (
        <TouchableOpacity
          key={icon}
          onPress={() => {
            setSelectedTab(icon);
            navigation.navigate(icon === 'home' ? 'Conta' : 'Extrato');
          }}
          style={styles.tabButton}
        >
          <Ionicons name={icon} size={24} color={selectedTab === icon ? '#00ccff' : '#000'} />
          {icon === 'chatbubble' && <View style={styles.centerIcon} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

function MainApp() {
  return (
    <View style={{ flex: 1 }}>
      <ExtratoScreen />
      <BottomTabNavigator />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: '#00ccff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00ccff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#00ccff',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileBalance: {
    fontSize: 16,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  reminderButton: {
    backgroundColor: '#00ccff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ccc',
  },
  activeTab: {
    borderColor: '#00ccff',
  },
  tabText: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
  },
  itemAmount: {
    marginLeft: 'auto',
    fontSize: 16,
  },
  income: {
    color: '#28a745', // Verde
  },
  expense: {
    color: '#dc3545', // Vermelho
  },
  viewMoreButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#00ccff',
    borderRadius: 5,
    marginTop: 10,
  },
  viewMoreText: {
    color: '#fff',
  },
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  centerIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#00ccff',
    borderRadius: 12,
  },
});