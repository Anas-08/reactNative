import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from '../combineReducers/cartReducer';

const ProductListDisplay = () => {
  const products = useSelector(state => state.product);
  // console.log(products[0])
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  function handelCart(productId, title, price, description, category) {
    const productData = {productId, title, price, description, category};
    //  console.log(productData)
    dispatch(addCartItem(productData));
  }

  // function handleCount(){
  //   setCount(count + 1)
  //   console.log(count)
  // }
  const getCartItem = useSelector(state => state.cart);
  console.log(getCartItem);

  return (
    <ScrollView>
      <Text>productListDisplay</Text>

      <View style={[styles.line]}></View>

      <View style={[styles.commonFlex, { justifyContent: "space-between", padding:12  }]} >
          <Text style={{fontSize: 18}} >MyApp </Text>
          <Text style={{fontSize: 18}} >Cart : { getCartItem.reduce((acc, curr) => acc + curr.quantity, 0 ) } </Text>
      </View>

      <View style={[styles.line]}></View>

      {products.map((item, index) => (
        <>
          <View style={[styles.border]}>
            {/* <Text>{item.id}</Text> */}
            <Text>
              <Text style={[styles.titleKey]}>Title : </Text> {item.title}
            </Text>

            <Text>
              <Text style={[styles.titleKey]}>Price : </Text> {item.price}
            </Text>

            <Text>
              <Text style={[styles.titleKey]}>Description : </Text>
              {item.description}
            </Text>
    
            <Text>
            <Text style={[styles.titleKey]}>Category : </Text> {item.category}
            </Text>

            <View style={[styles.commonFlex, {marginBlock: 12}]}>

              <TouchableOpacity
                style={[styles.border]}
                onPress={() =>
                  handelCart(
                    item.id,
                    item.title,
                    item.price,
                    item.description,
                    item.category,
                  )
                  // handleCount()
                }>

                <Text>Add To Cart</Text>
              </TouchableOpacity>

                <Text  style={[styles.border]} >Buy Now</Text>
            </View>
          </View>
        </>
      ))}
    </ScrollView>
  );
};

export default ProductListDisplay;

const styles = StyleSheet.create({
  border: {
    borderBlockColor: 'black',
    borderStyle: 'solid',
    padding: 12,
    borderWidth: 2,
    margin: 2,
  },
  commonFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  titleKey: {
    fontSize: 14,
    fontWeight: '700',
  },
  line:{
    height: 2,
    backgroundColor: "black",
    margin: 2

  }
});
