import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "@/constants/Color";

const Layout = () => {
  return (
    <Tabs 
      screenOptions={{
        // headerShown: false 
        tabBarStyle: {
          backgroundColor: Color.bgColor,
          borderTopWidth: 0,
          padding: 0,
        
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.black,        
        tabBarInactiveTintColor: "#999",
      }}
    
    >

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="space-dashboard" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <View style={{
              backgroundColor: Color.primaryColor,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 10,
              height: 50,
              width: 50,
              

            }} >
              <Ionicons name="search-outline" size={20} color={Color.white} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
