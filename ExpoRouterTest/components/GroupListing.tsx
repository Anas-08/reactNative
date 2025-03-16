import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GroupType } from "@/types/groupType";
import Color from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: any[];
}

// const GroupListing = ({listings}: Props) => {
const GroupListing = ({ listings }: { listings: GroupType[] }) => {

  const renderItems: ListRenderItem<GroupType> = ({ item }) => (

    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{}}>
        <Text style={styles.itemLabel} >{item.name}</Text>

        <View style={styles.itemDesContainer} >
            <Ionicons name="star" size={20}  color={Color.primaryColor} />
            <Text style={styles.itemRating} >{item.rating}</Text>
            <Text style={styles.itemReviews} >({item.reviews})</Text>
        </View>
      </View>
    </View>

  );

  return (
    <View>
      <Text style={styles.label}>Top Travel Groups</Text>
      <FlatList
        horizontal
        data={listings}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListing;

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight: 700,
    color: Color.black,
    marginVertical: 18,
  },
  image: {
    width: 80,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
  },
  
  item: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    marginBottom: 12,
    
    flexDirection: "row",
    alignItems: "center",
    // maxWidth: 220,

  },
  itemLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 8,
  },
  itemDesContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    color: Color.black
  },
  itemReviews: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
    color: "#999"
  },

});
