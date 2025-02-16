import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useNetwork from '../../components/productList/useNetwork';
import Product from '.';

const Main = () => {

    const network = useNetwork();

  if (!network.isLoading && !network.data) {
    network.fetch();
  }

  return (
    <View>
        <Product />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})