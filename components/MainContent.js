import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { t } from "react-native-tailwindcss";
import axios from "axios";

export default function MainContent({ navigation }) {
  var [chBut, setButton] = useState({ salary: 100000, percent: "51%" });
  var [chStatus, setStatus] = useState(false);
  var [opBlock, setBlock] = useState(0);
  var [changeValue, getValue] = useState(0);
  var [fetchedData, getZapros] = useState([]);
  const [users, setUser] = useState([
    {
      name: "Stas",
      username: "Ryan Gosling",
      status: "Some status",
      photo: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      name: "Olzhas",
      username: "alidarov",
      status: "...",
      photo: "https://reactnative.dev/img/tiny_logo.png",
    },
  ]);

  function changeButton() {
    if (chStatus === false) {
      setStatus(true);
      setButton({ salary: 50000, percent: "7%" });
    }
  }
  function chVal() {
    getValue(changeValue + 1);
  }
  function changeButtonS() {
    Alert.prompt("Button clicked");
    if (chStatus === true) {
      setStatus(false);
      setButton({ salary: 100000, percent: "51%" });
    }
  }
  function openBlock() {
    if (opBlock === "auto") {
      setBlock(0);
    } else {
      setBlock("auto");
    }
  }
  async function getAxios(value) {
    var res = await axios.get(
      "https://api.unsplash.com/search/photos?query={" + value + "}&client_id=UxQcyiv7djwaIznmB6G73bYjldVCcICcUT4HZpscGcI"
    );
    getZapros((fetchedData = res.data));
    console.log(fetchedData);
  }
  const loadScene = () => {
    navigation.navigate("About");
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView style={t.h40} horizontal={true}>
          <TouchableHighlight onPress={chVal}>
            <Image style={[t.hAuto]} source={require("../assets/1.jpg")} />
          </TouchableHighlight>
          <Image style={[t.hAuto]} source={require("../assets/2.jpg")} />
          <Image style={[t.hAuto]} source={require("../assets/3.jpg")} />
          <Image style={[t.hAuto]} source={require("../assets/4.jpg")} />
        </ScrollView>
        <Button title="To About" onPress={loadScene} />
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => navigation.navigate("Single", item)}
            />
          )}
        />
        <Text>{changeValue}</Text>
        <View>
          <View style={[t.flex, t.flexRow, t.justifyBetween, t.pX4, t.mY4]}>
            <Button onPress={changeButton} title="Без опыта" />
            <Button onPress={changeButtonS} title="С опытом работы" />
          </View>
          <View>
            <Text numberOfLines={1}>
              {chBut.salary} {"\n"} {chBut.percent}
            </Text>
          </View>
        </View>
        <TextInput
        onChangeText={(e) => getAxios(e)} style={{ border: '1px solid black' }} placeholder="Search..."/>
        <FlatList
          data={fetchedData.results}
          renderItem={({ item }) => (
            <>
              <Text>{item.id}</Text>
              <Image
                style={[t.w40, t.h40, t.flex, t.flexRow]}
                source={{ uri: item.urls.regular }}
              />
            </>
          )}
        />
        <View style={[t.mY4, t.pX4]}>
          <View>
            <Button
              title="Как учиться эффективно. Видеокурс от методистов GeekUniversity"
              onPress={openBlock}
              style={[t.bgBlack, t.p2, t.roundedLg, t.textLg, t.textWhite]}
            ></Button>
            <View style={{ overflow: "hidden", height: opBlock }}>
              <Text>
                Узнаете об особенностях обучения взрослых, научитесь ставить
                образовательные цели, строить карту компетенций, формулировать
                образовательные запросы.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
