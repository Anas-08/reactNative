import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";

const BlogDetail = () => {
  const { id, author } = useLocalSearchParams();
  return (
    <>
    <Stack.Screen options={{ headerTitle: `Blog no: ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>
          Blog Detail {id}
        </Text>
        { author && <Text> Author - { author }</Text> }
        {/* <Link href={'/'} > Go to Home</Link> */}
        <Button title="Go to Home" onPress={() => router.back()} />
      </View>
    </>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
