import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItem = ({ coin }) => {
    return (
        <View style={styles.containerItem}>
            <Image style={styles.imagen} source={{uri: coin.image}} />
            <Text style={styles.nombreMoneda}>{coin.name}</Text>
            <Text style={styles.nombreMoneda}>1000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: "#121212",
        paddingTop: 10,
        //PONER LOS COMPONENTES DE IZK A DERECHA EN RENGLON
        //POR DEFECTO ES COLUMN
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nombreMoneda: {
        color: '#FFF',
    },
    imagen: {
        width: 30,
        height: 30
    }
});

export default CoinItem