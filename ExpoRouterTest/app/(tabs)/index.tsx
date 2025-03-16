import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Color from "@/constants/Color";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButton from "@/components/CategoryButton";
import Listing from "@/components/Listing";
import listings from "@/data/destinations.json";
import groupListing from "@/data/groups.json";
import GroupListing from "@/components/GroupListing";
// import {  } from "react-native-reanimated/lib/typescript/Animated";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  function handleCategoryChange(category: string) {
    console.log("handleCategoryChange --->", category);
    setCategory(category);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert("clicked on img..")}
              style={{ marginLeft: 20 }}
            >
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 12,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert("clicked on notification")}
              style={{
                marginRight: 20,
                backgroundColor: Color.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Color.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Color.black}
              />
              <TextInput placeholder="Search" style={{ flex: 1 }} />
            </View>
            <TouchableOpacity
              style={styles.filterBtn}
              onPress={() => alert("clicked on filter")}
            >
              <Ionicons name="options" size={28} color={Color.white} />
            </TouchableOpacity>
          </View>

          <View>
            <CategoryButton handleCategoryChange={handleCategoryChange} />

            <Listing listings={listings} category={category} />

            <GroupListing listings={groupListing} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    marginTop: 10,
    fontWeight: 800,
    color: Color.black,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.white,
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Color.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 18,
    
  },
});
