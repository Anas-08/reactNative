import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Blog = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Blog Screen </Text>

      <Button title="Blog 1" onPress={() => router.push("/blog/1")} />
      <Button title="Blog 2" onPress={() => router.push("/blog/2")} />
      <Button title="Blog 3" onPress={() => router.push("/blog/3")} />
      <Button
        title="Blog 4"
        onPress={() => router.push("/blog/4?author=john")}
      />

      <Link
        href={{
          pathname: "/blog/5",
          params: { author: "From Blog 5" },
        }}
      >
        <Text>Blog 5</Text>
      </Link>
      <Link href={"/"}> Go to Home</Link>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
