import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import imgResponsive from "../../../constants/images"
import { moderateScale, verticalScale } from 'react-native-size-matters';
// import Icon from 'react-native-vector-icons/Ionicons'; // For the back button icon

// Custom BackButton Component
const CustomBackButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.backButton}
    onPress={onPress}
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
  >
    <Image source={imgResponsive.hideIcon} style={{ height: verticalScale(20), width: moderateScale(20), resizeMode: "contain" }} />
  </TouchableOpacity>
);

// Main Product Screen Component
const RegisterResponsive = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const imageHeight = screenWidth * 0.8; // Responsive image height based on screen width

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header with Back Button (Not Scrollable) */}
      <View style={styles.header}>
        <CustomBackButton onPress={() => navigation.goBack()} />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Product Image */}
        <Image
          source={imgResponsive.babyBackground} // Replace with your image path
          style={[styles.productImage, { width: screenWidth, height: imageHeight }]}
          resizeMode="contain"
        />

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>Natural Red Apple</Text>
          <Text style={styles.price}>$4.99/kg</Text>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Product Description */}
          <Text style={styles.productDescription}>
            Product Details: Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthy Diet.
          </Text>

          {/* Nutrition and Reviews Sections (Placeholder for now) */}
          <TouchableOpacity style={styles.sectionButton}>
            <Text style={styles.sectionText}>Nutrition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionButton}>
            <Text style={styles.sectionText}>Review</Text>
          </TouchableOpacity>

          {/* Add to Basket Button */}
          <TouchableOpacity style={styles.addToBasketButton}>
            <Text style={styles.addToBasketText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute', // Fixed position for the back button
    top: Platform.OS === 'android' ? 10 : 0, // Adjust for Android status bar
    left: 15,
    zIndex: 1, // Ensure it stays above other content
  },
  backButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingTop: 60, // Space for the fixed back button
    paddingBottom: 20,
  },
  productImage: {
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 15,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#4CAF50', // Green color for price
    marginBottom: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantityButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  sectionButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#000',
  },
  addToBasketButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addToBasketText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterResponsive;