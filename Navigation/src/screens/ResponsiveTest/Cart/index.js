import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../../assets/images/icons/images';


const Cart = () => {
    // Custom BackButton Component
const CustomBackButton = ({ onPress }) => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
        <Image source={images.aboutIcon} style={{ height: 20, width: 20 }} />
    </TouchableOpacity>
  );

// Cart Item Component
const CartItem = ({ item, onQuantityChange, onRemove }) => {


    // const handleIncrement = () => {
    //     // Simply call the onQuantityChange callback with the new quantity
    //     // Alert.alert("tset")
    //     const newQuantity = (item.quantity || 1) + 1; // Default to 1 if quantity is undefined
    //     onQuantityChange(item.id, newQuantity);
    //   };
    
    //   const handleDecrement = () => {
    //     if ((item.quantity || 1) > 1) {
    //       const newQuantity = (item.quantity || 1) - 1;
    //       onQuantityChange(item.id, newQuantity);
    //     }
    //   };
      

      

    // const [quantity, setQuantity] = useState(1); // Default quantity is 1
  
    // const handleIncrement = () => {
    //     console.log("clicked on inc")
    //     console.log("quantity --> ", quantity)
    //     const newQuantity = quantity + 1;
    //     console.log("newQuantity --> ", newQuantity)
    //     setQuantity(newQuantity);
    //     console.log("quantity --> ", quantity)
    //   onQuantityChange(item.id, newQuantity);
    // };
  
    // const handleDecrement = () => {
    //   if (quantity > 1) {
    //     const newQuantity = quantity - 1;
    //     setQuantity(newQuantity);
    //     onQuantityChange(item.id, newQuantity);
    //   }
    // };

        const handleIncrement = () => {
        onQuantityChange(item.id, item.quantity + 1);
      };
    
      const handleDecrement = () => {
        if (item.quantity > 1) {
          onQuantityChange(item.id, item.quantity - 1);
        }
      };


    return (
      <View style={styles.cartItem}>
        <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>{`$${item.price.toFixed(2)}`}</Text>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
          <Text style={styles.removeText}>×</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Bell Pepper Red',
      subtitle: '1kg, Price',
      price: 4.99,
      image: images.productIcon,
      quantity: 1, // Replace with your image path
    },
    {
      id: '2',
      name: 'Egg Chicken Red',
      subtitle: '4pcs, Price',
      price: 1.99,
      image:  images.productIcon, // Replace with your image path
      quantity: 1,
    },
    {
      id: '3',
      name: 'Organic Bananas',
      subtitle: '12kg, Price',
      price: 3.00,
      image:  images.productIcon, // Replace with your image path
      quantity: 1,
    },
    {
      id: '4',
      name: 'Ginger',
      subtitle: '250gm, Price',
      price: 2.99,
      image:  images.productIcon, // Replace with your image path
      quantity: 1,
    },
  ]);

const handleQuantityChange = (itemId, newQuantity) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
  );
};


//   const handleQuantityChange = (itemId, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };


  

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
      .toFixed(2);
  };


  return (
    <SafeAreaView>
     <View style={styles.header}>
        <CustomBackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        )}
        contentContainerStyle={styles.flatListContent}
      />

    <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Go to Checkout</Text>
        <Text style={styles.checkoutTotal}>${calculateTotal()}</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    backgroundColor: '#F5F5F5',
    height: 60,
    zIndex: 1,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 80, // Space for the checkout button and bottom nav
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
  removeButton: {
    padding: 5,
  },
  removeText: {
    fontSize: 20,
    color: '#666',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 60, // Space for bottom nav
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutTotal: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
})