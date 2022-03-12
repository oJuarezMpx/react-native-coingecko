//rnfe
import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CoinItem from './components/CoinItem';

const App = () => {

  const [coins, setCoins] = useState([]);

  const pidedatos = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
    const datos = await res.json();
    setCoins(datos);
  }

  useEffect( () => {
    // clg
    console.log("ok");
    pidedatos();
  }, []);


  return (
    <View style={styles.moneda}>
      <FlatList
        data={coins}
        renderItem={({item, index})=>{
          return <CoinItem coin={item}/>
        }}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
    moneda: {
      backgroundColor: "#141414",
      alignItems: 'center',
      flex: 1
    }
  });



export default App