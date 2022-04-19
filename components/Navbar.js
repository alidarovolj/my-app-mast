import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { t } from "react-native-tailwindcss";

export const Navbar = ({ title }) => {
  return (
    <>
      <View
        style={[
          t.wFull,
          t.textCenter,
          t.p4,
          t.pT16,
          t.flex,
          t.flexRow,
          t.itemsCenter,
          t.justifyBetween,
          t.bgBlack,
          t.textWhite
        ]}
      >
        <Text style={[ t.textWhite ]}>{title}</Text>
        <Text style={[ t.textWhite ]}><FontAwesome name='bars' /></Text>
      </View>
    </>
  );
};
