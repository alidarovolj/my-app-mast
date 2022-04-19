import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Navbar } from "./components/Navbar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigate from './components/Navigate'

import { BottomMenu } from "./components/BottomMenu";
import { cStyle } from "./components/cStyle";

const fonts = () => Font.loadAsync({
  SFProDisplay: require('./assets/fonts/SFProDisplay-Regular.ttf')
})

export default function App({ navigation }) {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <Navigate />
    );
  } else {
    return (
      <AppLoading 
        startAsync = {fonts}
        onFinish = {() => setFont(true)}
        onError = {() => console.warn()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
