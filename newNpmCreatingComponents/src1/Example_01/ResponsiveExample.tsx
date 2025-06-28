import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  FlatList,
  Dimensions
} from 'react-native';
import responsive from '../Test_01/Responsive';
import CustomToast from '../Test_01/CustomToastComponent';

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
}



const ResponsiveExample: React.FC = () => {
  const products = [
    {
      name: 'Wireless Headphones',
      price: '$99.99',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Smart Watch',
      price: '$199.99',
      description: 'Fitness tracking and notifications on your wrist with heart rate monitoring.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Bluetooth Speaker',
      price: '$79.99',
      description: 'Portable speaker with 20-hour battery life and waterproof design.',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'VR Headset',
      price: '$299.99',
      description: 'Immersive virtual reality experience with motion tracking.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dnIlMjBoZWFkc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    }
  ];

  const isTablet = responsive.isTablet();
  const screenWidth = Dimensions.get('window').width;


  const [visible, setVisible] = useState(false);


  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.image} 
          resizeMode="cover"
        />
        <View style={styles.details}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description} numberOfLines={responsive.isTablet() ? 3 : 2}>
            {product.description}
          </Text>
          <TouchableOpacity 
            onPress={() => {setVisible(true); console.log("btn press")}}
          style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
{/* 
        <CustomToast
              visible={visible}
              // message="Custom toast message here!"
              message="Product added to cart"
              showCloseButton={true}
              duration={1000}
              position="top"
              backgroundColor="#6200ee"
              textColor="#fff"
              onClose={() => setVisible(false)}
            /> */}

        <CustomToast
          visible={visible}
          message="Added to cart!"
          showCloseButton={true}
          duration={5000}
          position="top"
          backgroundColor="#4caf50"
          textColor="#fff"
          animationType="spring"
          progressBar={true}
          // icon={<Text>🛒</Text>}
          onClose={() => setVisible(false)}
        />

      <Text style={styles.header}>Our Products</Text>ex
      
      {isTablet ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          snapToInterval={screenWidth * 0.8} // Adjust as needed
          decelerationRate="fast"
        />
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.verticalListContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: responsive.moderateScale(16),
  },
  header: {
    fontSize: responsive.moderateScale(28),
    fontWeight: 'bold',
    marginBottom: responsive.verticalScale(20),
    color: '#333',
  },
  horizontalListContent: {
    paddingHorizontal: responsive.moderateScale(16),
    alignItems: 'center',
  },
  verticalListContent: {
    paddingBottom: responsive.verticalScale(20),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: responsive.moderateScale(12),
    marginBottom: responsive.verticalScale(20),
    marginRight: responsive.isTablet() ? responsive.moderateScale(20) : 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: responsive.verticalScale(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: responsive.moderateScale(8),
    elevation: 3,
    width: responsive.isTablet() ? responsive.scale(350) : '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: responsive.isTablet() ? responsive.verticalScale(250) : responsive.verticalScale(180),
  },
  details: {
    padding: responsive.moderateScale(15),
  },
  name: {
    fontSize: responsive.moderateScale(18),
    fontWeight: '600',
    marginBottom: responsive.verticalScale(5),
  },
  price: {
    fontSize: responsive.moderateScale(16),
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: responsive.verticalScale(8),
  },
  description: {
    fontSize: responsive.moderateScale(14),
    color: '#666',
    marginBottom: responsive.verticalScale(12),
    lineHeight: responsive.verticalScale(20),
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: responsive.verticalScale(10),
    paddingHorizontal: responsive.moderateScale(15),
    borderRadius: responsive.moderateScale(6),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: responsive.moderateScale(14),
    fontWeight: '600',
  },
});

export default ResponsiveExample;