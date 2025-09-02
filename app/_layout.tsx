import { Stack } from "expo-router";
import "./global.css";
import { ScreenStack } from "react-native-screens";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen 
    name="(tabs)"
    options={{headerShown: false}}
    />
    </Stack>;
}
