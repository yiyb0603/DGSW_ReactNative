export interface IWeatherResponseType {
  base: string;
  clouds: {
    all?: number;
  };
  cod?: number;
  coord?: {
    lat: number;
    lon: number;
  };
  dt?: number;
  id?: number;
  main: {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    name: string;
  }
  rain?: {
    "1h": number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: string;
  };
  timezone: number;
  visibility: number;
  weather: Array<IWeatherType>

  wind: {
    deg: number;
    speed: number;
  };
};

export interface IWeatherObject {
  feels_like?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;
  main?: string;
  iconName?: string;
  title?: string;
  subtitle?: string;
}

interface IWeatherType {
  description: string;
  icon: string;
  id: number;
  main: string;
};