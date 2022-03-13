//rnfe
import { View, Text, FlatList, StyleSheet, StatusBar, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CoinItem from './components/CoinItem';

const App = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [refresco, setRefresco] = useState(false);

  const pidedatos = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
    const datos = await res.json();
    setCoins(datos);
  }

  useEffect( () => {
    pidedatos();
  }, []);

  return (
    <View style={styles.moneda}>
      <StatusBar backgroundColor={"#FFF"}/>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput style={styles.inputsin} onChangeText={ text => setSearch(text)}  />
      </View>
      <FlatList
      style={styles.list}
        data={coins.filter( (coin) => 
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase()) )}
        renderItem={({item, index})=>{
          return <CoinItem coin={item}/>
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refresco}
        onRefresh={ async () => {
          setRefresco(true);
          await pidedatos();
          setRefresco(false);
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
    },
    title: {
      color: "#FFF",
      fontSize: 18
    },
    list: {
      width: '90%'
    },
    header: {
      flexDirection: "row",
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 10
    },
    inputsin:{
      color: "#FFF",
      borderBottomColor: "#4657CE",
      borderBottomWidth: 1,
      width: '40%',
      textAlign: 'center'
    }
  });



export default App