import { Input } from "@/components/input";

import { Text, View, Image, StatusBar, Alert } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert("Credential", "Informe o codigo do ingresso");
    }
  }
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
          <Input.Field
            placeholder="Codigo do ingresso"
            value={code}
            onChangeText={setCode}
          />
        </Input>
        <Button title="Acessar credencial" />

        <Link
          href="/register"
          className="text-gray-100 text-base text-center font-bold mt-8"
        >
          Ja possui ingresso?
        </Link>
      </View>
    </View>
  );
}
