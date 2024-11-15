// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

import styles from './styles';

export default function PageGraphics() {
  const [labels, setLabels] = useState([]); // Inicializando labels com um array vazio
  const [prices, setPrices] = useState([32000, 35000, 30000, 40000, 45000, 48000]);

  // Função para buscar dados em tempo real do Bitcoin
  const fetchBitcoinData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
      );
      const prices = response.data.prices.map(item => item[1]); // Preço do Bitcoin

      // Atualiza o gráfico removendo o primeiro valor e adicionando o novo
      setPrices(prevPrices => [...prevPrices.slice(1), prices[prices.length - 1]]);

      // Atualiza o label com o horário atual no formato hora:minuto
      const newLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLabels(prevLabels => {
        if (prevLabels.length >= 10) {
          return [...prevLabels.slice(1), newLabel]; // Limita a quantidade de labels (exibindo apenas os últimos 10)
        }
        return [...prevLabels, newLabel]; // Adiciona o label sem ultrapassar 10 entradas
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Atualizar dados a cada 60 segundos (tempo real)
  useEffect(() => {
    fetchBitcoinData(); // Inicializa o gráfico com dados
    const interval = setInterval(fetchBitcoinData, 60000); // Atualiza a cada 60 segundos
    return () => clearInterval(interval); // Limpeza do intervalo ao sair do componente
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gráficos de Moedas Virtuais e Ações</Text>

      {/* Gráfico do Bitcoin */}
      <Text style={styles.chartTitle}>Bitcoin</Text>
      <LineChart
        data={{
          labels: labels, // Atualiza os labels em tempo real
          datasets: [
            {
              data: prices, // Preço do Bitcoin atualizado em tempo real
              color: () => '#f7931a', // Cor laranja do Bitcoin
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width - 30} // Largura da tela
        height={220}
        chartConfig={{
          backgroundColor: "#1e2923",
          backgroundGradientFrom: "#1e2923",
          backgroundGradientTo: "#08130d",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor da linha e texto
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />
    </ScrollView>
  );
}


