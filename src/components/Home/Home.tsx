import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { IFindWeatherTypes } from 'types/WeatherType';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { IHomeStyleTypes } from 'types/StyleTypes';
import { StatusBar } from 'expo-status-bar';

const { width, height }: { width: number, height: number } = Dimensions.get('screen');
interface HomeTypes {
  weatherInfo: IFindWeatherTypes;
  isLoading: boolean;
}

const Home = ({ weatherInfo, isLoading } : HomeTypes) => {
  if (weatherInfo !== undefined) {
    const { iconName, title, subtitle, temp, temp_max, temp_min, feels_like }: IFindWeatherTypes = weatherInfo;
    const { backgroundStyle, containers, iconText, temperatureText, subtitleText, minMaxContainer,
      topNav, topNavContents }: IHomeStyleTypes = styles;
  
    return (
      <ScrollView>
        <StatusBar />
        <LinearGradient colors ={["#4e54c8", "#8f94fb"]} style={backgroundStyle}>
          <View style ={topNav}>
            <AntDesign name ="arrowleft" style ={topNavContents} />
            <AntDesign name ="arrowright" style ={topNavContents} />
          </View>

          <View style ={containers}>
            <MaterialCommunityIcons name ={iconName} style ={iconText} />
            <Text style ={temperatureText}>{temp}ºC</Text>
            <Text style ={subtitleText}>{subtitle}</Text>

            <View style ={minMaxContainer}>
              <Text>최고 {temp_max}ºC</Text>
              <Text>최저 {temp_min}ºC</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width,
    height,
  },

  topNav: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40
  },

  topNavContents: {
    fontSize: 30,
    marginHorizontal: 30
  },

  containers: {
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconText: {
    fontSize: 80
  },

  temperatureText: {
    fontSize: 50
  },

  subtitleText: {
    fontSize: 20
  },

  minMaxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%'
  }
});

export default Home;