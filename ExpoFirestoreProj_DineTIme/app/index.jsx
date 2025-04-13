import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
    className="bg-red-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={()=> router.navigate('(tabs)/home') } >
       <Text> Go to Tabs</Text>
      </TouchableOpacity>
    </View>
  );
}
