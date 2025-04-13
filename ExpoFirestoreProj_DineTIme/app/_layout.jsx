import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  // return <Stack />;
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)"  />
    </Stack>
  )
  
}
