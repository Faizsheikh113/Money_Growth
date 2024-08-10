import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const AlphaVantageComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const apiKey = "GQRU0ZSC6UO6CNTJ";
    const apiUrl = "https://www.alphavantage.co/query";
    const functionParam = "FX_DAILY";
    const fromSymbolParam = "EUR";
    const toSymbolParam = "USD";

    try {
      const response = await axios.get(apiUrl, {
        params: {
          function: functionParam,
          from_symbol: fromSymbolParam,
          to_symbol: toSymbolParam,
          apikey: apiKey,
        },
      });

      if (!response.data) {
        Error('Empty response from the API');
      }

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alpha Vantage API Data:</Text>
      {data ? (
        <LineChart
          data={{
            labels: Object.keys(data['Time Series FX (Daily)']).reverse(),
            datasets: [
              {
                data: Object.values(data['Time Series FX (Daily)']).map(
                  (item) => parseFloat(item['1. open'])
                ),
              },
            ],
          }}
          width={400}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default AlphaVantageComponent;
