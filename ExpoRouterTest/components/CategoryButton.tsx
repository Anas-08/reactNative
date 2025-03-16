import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import destinationCategories from "@/data/categories";
import Color from "@/constants/Color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  handleCategoryChange: (category: string) => void;
}

const CategoryButton = ({ handleCategoryChange }: Props) => {
  // const itemRef = useRef<TouchableOpacity[] | null[]>([])
  const itemRef = useRef<(TouchableOpacity | null)[]>([]);
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleCategorySelect(index: number) {
    const selectCategory = itemRef.current[index];
    // console.log("selectCategory ---> ", selectCategory)
    // console.log("scrollRef ---> ", scrollRef)
    // console.log("itemRef ---> ", itemRef)
    setActiveIndex(index);

    // selectCategory.measure((x) => scrollRef.current?.scrollTo({x: x, y:0, animated: true}))
    // selectCategory.measure((x) => console.log("x value --> ", x))

    selectCategory.measure((x: number) => {
      scrollRef.current?.scrollTo({ x, y: 0, animated: true });
      console.log("x value --> ", x);
    });

    handleCategoryChange(destinationCategories[index].title);
  }

  return (
    <View>
      <Text style={styles.label}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 12,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(ele) => (itemRef.current[index] = ele)}
            style={
              activeIndex == index
                ? styles.categoryActiveBtn
                : styles.categoryBtn
            }
            onPress={() => handleCategorySelect(index)}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={24}
              color={activeIndex == index ? Color.white : Color.black}
            />
            <Text
              style={
                activeIndex == index
                  ? styles.categoryActiveLabel
                  : styles.categoryLabel
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight: 700,
  },
  categoryBtn: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#333333",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  categoryActiveBtn: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: Color.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#333333",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  categoryLabel: {
    color: Color.black,
  },
  categoryActiveLabel: {
    color: Color.white,
  },
});
