import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, SERVER } from '../../config/config.json';
import Home from '../../components/Home';
import { IWeatherResponseType, IWeatherObject } from '../../types/WeatherType';
import { weatherStyles } from '../../Designs/WeatherStyle';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import Loading from '../../components/Loading';

const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherInfo, setWeatherInfo] = useState<IWeatherObject>({
    feels_like: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    main: '',
  });

  const getWeathers = useCallback(async (latitude: number, longitude: number) => {
    const { data }: { data: IWeatherResponseType } = await axios.get(`${SERVER}?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    return data;
  }, []);

  const requestGetLocations = useCallback(async () => {
    await Location.requestPermissionsAsync();
    const location: Location.LocationData = await Location.getCurrentPositionAsync();

    const { latitude, longitude }: { latitude: number, longitude: number; } = location.coords;
    await requestGetWeathers(latitude, longitude);
  }, []);

  const requestGetWeathers = useCallback(async (latitude: number, longitude: number) => {
    await getWeathers(latitude, longitude)
    .then((response: IWeatherResponseType) => {
      if (response !== undefined || response !== null) {
        const { feels_like, temp, temp_max, temp_min } = response.main;
        const { main } = response.weather[0];

        const data: IWeatherObject = {
          feels_like,
          temp,
          temp_max,
          temp_min,
          main,
        };

        const item = weatherStyles.find(weather => weather.name === data.main);
        setWeatherInfo({ ...item, temp, temp_max, temp_min, feels_like });
      }
    })

    .catch(() => {
      Alert.alert("에러가 발생했습니다.");
    })

    .finally(() => {
      setIsLoading(false);
    })
  }, []);
~
  useEffect(() => {
    requestGetLocations();
  }, [requestGetLocations]);

  return (
    <>
      {
        isLoading ? <Loading /> : <Home weatherInfo ={weatherInfo} />
      }
    </>
  );
};

export default HomeContainer;