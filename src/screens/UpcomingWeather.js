import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2021-03-01 12:00:00",
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-03-01 11:00:00",
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2022-03-01 12:00:00",
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_txt, min, max, condtion } = props;
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condtion={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground source={require("../../assets/beach.jpg")} style={image}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },

  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
