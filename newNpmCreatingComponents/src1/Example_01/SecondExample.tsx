import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Dimensions } from 'react-native';
import CustomRadioButtonGroup, { RadioOption } from '../Test_01/CustomRadioButtonGroup';
import CustomCheckBoxGroup, { CheckboxOption } from '../Test_01/CustomCheckboxGroup';
import responsive from '../Test_01/Responsive';
import CustomToast from '../Test_01/CustomToastComponent';

interface Product {
  id: string;
  name: string;
  category: string;
  features: string[];
  price: string;
}

const ProductFilterScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const categories: RadioOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Wearables', value: 'wearables' },
  ];

  const features: CheckboxOption[] = [
    { label: 'Wireless', value: 'wireless' },
    { label: 'Waterproof', value: 'waterproof' },
    { label: 'Noise Cancelling', value: 'noise-cancelling' },
    { label: 'Long Battery', value: 'long-battery' },
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      category: 'electronics',
      features: ['wireless', 'noise-cancelling', 'long-battery'],
      price: '$99.99',
    },
    {
      id: '2',
      name: 'Smart Watch',
      category: 'wearables',
      features: ['wireless', 'waterproof'],
      price: '$199.99',
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      category: 'electronics',
      features: ['wireless', 'waterproof', 'long-battery'],
      price: '$79.99',
    },
    {
      id: '4',
      name: 'VR Headset',
      category: 'electronics',
      features: ['wireless', 'noise-cancelling'],
      price: '$299.99',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === '' || product.category === selectedCategory;
    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((feature) => product.features.includes(feature));
    return matchesCategory && matchesFeatures;
  });

  const isTablet = responsive.isTablet();
  const screenWidth = Dimensions.get('window').width;

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setToastVisible(true);
  };

  const handleFeaturesChange = (values: string[]) => {
    setSelectedFeatures(values);
    setToastVisible(true);
  };

  const ProductItem = ({ product }: { product: Product }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productFeatures}>Features: {product.features.join(', ')}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomToast
        visible={toastVisible}
        message="Filters updated!"
        showCloseButton={true}
        duration={2000}
        position="top"
        backgroundColor="#4caf50"
        textColor="#fff"
        animationType="spring"
        progressBar={true}
        onClose={() => setToastVisible(false)}
      />

      <Text style={styles.header}>Product Filters</Text>

      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Select Category</Text>
        <CustomRadioButtonGroup
          options={categories}
          selectedValue={selectedCategory}
          onChange={handleCategoryChange}
          type={isTablet ? 'rectangle' : 'circle'}
          size={responsive.moderateScale(24)}
          borderColor="#3498db"
          fillColor="#3498db"
          labelStyle={styles.radioLabel}
        />
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Select Features</Text>
        <CustomCheckBoxGroup
          options={features}
          selectedValues={selectedFeatures}
          onChange={handleFeaturesChange}
          type={isTablet ? 'rectangle' : 'square'}
          color="#2ecc71"
          size={responsive.moderateScale(24)}
          labelStyle={styles.checkboxLabel}
          sizeMode="center"
          showCheckmark={true}
        />
      </View>

      <Text style={styles.sectionTitle}>Filtered Products</Text>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={<Text style={styles.emptyText}>No products match the selected filters.</Text>}
      />
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
  filterSection: {
    marginBottom: responsive.verticalScale(20),
  },
  sectionTitle: {
    fontSize: responsive.moderateScale(18),
    fontWeight: '600',
    marginBottom: responsive.verticalScale(10),
    color: '#333',
  },
  radioLabel: {
    fontSize: responsive.moderateScale(16),
    color: '#333',
  },
  checkboxLabel: {
    fontSize: responsive.moderateScale(16),
    color: '#333',
  },
  productList: {
    paddingBottom: responsive.verticalScale(20),
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: responsive.moderateScale(12),
    padding: responsive.moderateScale(15),
    marginBottom: responsive.verticalScale(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: responsive.verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: responsive.moderateScale(8),
    elevation: 3,
  },
  productName: {
    fontSize: responsive.moderateScale(18),
    fontWeight: '600',
    marginBottom: responsive.verticalScale(5),
  },
  productPrice: {
    fontSize: responsive.moderateScale(16),
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: responsive.verticalScale(5),
  },
  productFeatures: {
    fontSize: responsive.moderateScale(14),
    color: '#666',
  },
  emptyText: {
    fontSize: responsive.moderateScale(16),
    color: '#666',
    textAlign: 'center',
    marginTop: responsive.verticalScale(20),
  },
});

export default ProductFilterScreen;