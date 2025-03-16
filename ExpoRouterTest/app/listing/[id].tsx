import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import listings from "@/data/destinations.json";
import { ListingType } from "@/types/listingTypes";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Color from "@/constants/Color";

const { width } = Dimensions.get("window");
const HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();

  //   const data:ListingType = (listings as ListingType[]).find((item) => item.id === id)
  const data: ListingType = (listings as ListingType[]).find(
    (item) => item.id === id
  ) as ListingType;

  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.button}
            >
              <View style={styles.headerLeft}>
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                alert("save to bookmark");
              }}
              style={styles.button}
            >
              <View style={styles.headerLeft}>
                <Feather name="bookmark" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.image} />

        <View style={styles.containerContent}>
          <Text style={styles.dataLabel}>{data.name}</Text>

          <View style={styles.dataLocationContainer}>
            <FontAwesome5
              name="map-marker-alt"
              size={20}
              color={Color.primaryColor}
            />
            <Text style={styles.dataLocationLabel}>{data.location}</Text>
          </View>

          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="time" size={18} color={Color.primaryColor} />
              </View>
              <View style={styles.highlightContent}>
                <Text style={styles.highlightLabel}>Duration</Text>
                <Text style={styles.highlightLabelValue}>
                  {data.duration} days
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="people" size={18} color={Color.primaryColor} />
              </View>
              <View style={styles.highlightContent}>
                <Text style={styles.highlightLabel}>Person</Text>
                <Text style={styles.highlightLabelValue}>{data.duration}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.highlightIcon}>
                <Ionicons name="star" size={18} color={Color.primaryColor} />
              </View>
              <View style={styles.highlightContent}>
                <Text style={styles.highlightLabel}>Rating</Text>
                <Text style={styles.highlightLabelValue}>{data.rating}</Text>
              </View>
            </View>
          </View>

          <View style={styles.dataDescription}>
            <Text style={styles.dataDescriptionLabel}>{data.description}</Text>
          </View>
        </View>

        <View style={styles.footer} >

          <TouchableOpacity
            onPress={() => alert("booked...")}
            style={[styles.footerBtn, styles.footerBookedBtn]}
          >
            <Text style={styles.footerBtnText} >Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert(`Price of ${data.name} is $ ${data.price}`)}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText} >${data.price}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  containerContent: {
    padding: 20,
  },
  image: {
    width: width,
    height: HEIGHT,
  },
  headerLeft: {
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 4,
  },
  dataLabel: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Color.black,
  },
  dataLocationContainer: {
    // marginBlock: 12,
    marginTop: 8,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  dataLocationLabel: {
    marginLeft: 5,
    color: Color.black,
  },
  highlightWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  highlightIcon: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  highlightLabel: {
    fontSize: 12,
    color: "#999",
  },
  highlightLabelValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  highlightContent: {
    marginLeft: 12,
  },
  dataDescription: {
    marginBlock: 12,
  },
  dataDescriptionLabel: {
    fontSize: 16,
    color: Color.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width,
    gap: 12,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: Color.black,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerBookedBtn: {
    flex: 2,
    backgroundColor: Color.primaryColor,
  },
  footerBtnText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

});
