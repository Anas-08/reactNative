import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
// import { productList } from '../../data/productsDummyList'
import { images } from '../../assets/images/icons/images'
import { useSelector } from 'react-redux'


const Product = () => {

  const productFromStore = useSelector((state) => state.product.productList)
  const isLoading = useSelector((state) => state.product.isLoading)

  // const {isLoading, productList} = productFromStore

  // const [data, setData] = useState(productList)
  // console.log("data ---> ", data)

  console.log("productFromStore ---> ", productFromStore)

  const ProductItem = ({product}) => (

    <View style={{flex: 1}}>

      <View style={{borderWidth: 1, margin: 12, padding: 12}}>

        <View style={{ alignItems: "center" }} >
          <Image source={images.aboutIcon} />
        </View>

        <View style={{ marginBlock: 12, }} >
            <Text> Title: {product.title} </Text>
   
            <Text> Category: {product.category} </Text>
  
            <Text> Price: ${product.price} </Text>
        </View>

        <View>
          <Pressable style={{borderWidth: 1}}>
            <Text style={{textAlign: 'center', padding: 8}}> Cart </Text>
          </Pressable>
        </View>

      </View>

    </View>
  );

  const renderProduct = ({item})=> <ProductItem product={item} /> 

  if(isLoading){
    console.log("is loading ---> ", isLoading)
    return <View> 
      <Text style={{ textAlign: 'center', fontSize: 24 }} > Loading... </Text> 
    </View>
  }

  return (
    <View>
      {/* <Text>Product</Text> */}
      <FlatList
        data={productFromStore.products}
        renderItem={renderProduct}
        numColumns={2}
      />
    </View>
  )
}

export default Product