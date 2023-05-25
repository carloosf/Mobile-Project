/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Token from '../components/Token'
import { Text, StyleSheet, View, Image } from 'react-native'
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald'

interface HomeProps {
  children: React.ReactNode
}

export default function Home({ children }: HomeProps) {
  const [fontLoaded] = useFonts({
    Oswald_400Regular,
  })
  if (!fontLoaded) {
    return null
  } else {
    return (
      <View>
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo-ofc.png')} />
          <Token idToken="teste" color="black" />
        </View>
        <View style={styles.historico}>
          <Text style={styles.textHistorico}>Histórico de Solicitações</Text>
          <Token idToken="teste" color="black" />
          <Token idToken="teste" color="black" />
          <Token idToken="teste" color="black" />
          <Token idToken="teste" color="black" />
          <Token idToken="teste" color="black" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    padding: 50,
  },
  historico: {
    padding: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 450,
  },
  textHistorico: {
    color: '#fff',
    fontSize: 20,
  },
})