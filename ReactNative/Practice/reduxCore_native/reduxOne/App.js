import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

// import store 
import reduxStore from './src/store';
import { Provider, useSelector } from 'react-redux';
import ProductListDisplay from './src/components/ProductListDisplay';
import ArrayTask from './src/components/ArrayTask';

const App = () => {

  return (
    <Provider store={reduxStore}>
      {/* <ProductListDisplay/> */}
      <ArrayTask/>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
