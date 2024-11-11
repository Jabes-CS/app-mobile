import React, {useState} from "react";
import { View, Text,  TouchableOpacity, ScrollView, Image  } from "react-native";

import styles from "./styles";


export default function PageHome(){
    
    const [tab, setTab] = useState("Entrada");

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


        {/* MUDANÇA DE VISUALIZAÇÃO ENTRADA/SAIDA */}
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