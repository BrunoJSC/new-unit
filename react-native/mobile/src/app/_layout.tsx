// Import your global CSS file
// Arquivo de configuracao do layout
import { Slot } from "expo-router";
import "../styles/global.css";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Loading } from "../components/loading";
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) return <Loading />;

  return <Slot />;
}
