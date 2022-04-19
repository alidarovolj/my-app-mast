import React, { useState } from "react";
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

export const BottomMenu = props => {
  var [showInput, setInput] = useState("none");
  var [inputValue, changeValue] = useState("");
  function changeStatus() {
    if (showInput == "none") {
        setInput(showInput = 'block');
    } else {
        setInput(showInput = 'none');
    }
  }
  return (
    <>
      <View style={[ t.absolute, t.wFull, t.bottom0 ]}>
        <Text>{ inputValue }</Text>
        <TextInput
        onChangeText={(e) => changeValue(e)} style={{ display: showInput, border: '1px solid black' }} placeholder="Search..."/>
        <View style={[ t.wFull, t.pY4, t.flex, t.flexRow, t.justifyBetween, t.borderT, t.borderGray300 ]}>
            <View style={[ t.w1_4 ]}>
                <FontAwesome name='home' style={[ t.text2xl, t.textCenter, t.textGray500, t.textRed600, t.underline ]} />
            </View>
            <View style={[ t.w1_4 ]}>
                <FontAwesome name='search' style={[ t.text2xl, t.textCenter, t.textGray500 ]} />
            </View>
            <View style={[ t.w1_4 ]}>
                <FontAwesome name='heart' style={[ t.text2xl, t.textCenter, t.textGray500 ]} />
            </View>
            <View style={[ t.w1_4 ]}>
                <FontAwesome onPress={changeStatus} name='user' style={[ t.text2xl, t.textCenter, t.textGray500 ]} />
            </View>
        </View>
      </View>
    </>
  );
};
