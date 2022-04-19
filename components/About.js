import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, ScrollView, SafeAreaView, TouchableHighlight } from "react-native";
import { t } from "react-native-tailwindcss";

export default function About({ navigation }) {
    const loadScene = () => {
      navigation.goBack()
    }
    return (
        <>
        <SafeAreaView>
        <Text>About</Text>
        <Button title="Go Back" onPress={loadScene}/>
        </SafeAreaView>
        </>
    );
};
