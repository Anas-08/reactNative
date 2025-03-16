import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ListingType } from "@/types/listingTypes";
import Color from "@/constants/Color";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

interface Props {
  listings: any[];
  category: string;
}

const Listing = ({ listings, category }: Props) => {

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    console.log("listing update ...")
    setLoading(true)
    
    setTimeout(()=>{
        setLoading(false)
    },200)

  }, [category])


  const renderItem: ListRenderItem<ListingType> = ({ item }) => (
    // <Link href={`/listing/${item.id}`} asChild>
    <Link href={{ 
        pathname: '/listing/[id]',
        params: { id: `${item.id}` }
     }} asChild>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} color={Color.white} />
          </View>
          <Text style={styles.itemLabel} numberOfLines={1}>
            {item.name}
          </Text>

          <View style={styles.detailContainer}>
            <View style={styles.locationContainer}>
              <FontAwesome5
                name="map-marker-alt"
                size={20}
                color={Color.primaryColor}
              />
              <Text>{item.location}</Text>
            </View>
            <Text style={styles.priceLabel}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View>
      <FlatList
        data={ loading ? [] : listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        //   contentContainerStyle={{ gap: 20, paddingVertical: 12, marginBottom: 10 }}
      />
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Color.white,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    gap: 8,
  },
  priceLabel: {
    fontWeight: "600",
    color: Color.primaryColor,
  },

  shimmerContainer: {
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    borderRadius: 6,
  },
  shimmerOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  }
});
