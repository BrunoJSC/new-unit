import { Input } from "@/components/input";

import { Text, View, Image, StatusBar } from "react-native";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Codigo do ingresso" />
        </Input>
        <Button title="Acessar credencial" />

        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Codigo do ingresso"
            keyboardType="email-address"
          />
        </Input>
        <Link href="/" className="text-gray-100 text-base font-bold mt-8">
          Ja possui ingresso?
        </Link>
      </View>
    </View>
  );
}
