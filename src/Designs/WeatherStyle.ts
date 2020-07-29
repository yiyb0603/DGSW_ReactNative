export interface IWeatherStyleTypes {
  name: string;
  iconName: string;
  gradient: Array<string>;
  title: string;
  subtitle: string;
};

export const weatherStyles: Array<IWeatherStyleTypes> = [
  {
    name: "ThunderStorm",
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "천둥번개가 칩니다 조심하세요!"
  },
  {
    name: "Drizzle",
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "이슬비가 내리고 있습니다."
  },
  {
    name: "Rain",
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "비가 오고있습니다 우산을 챙기세요!"
  },
  {
    name: "Snow",
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "눈이 내리고있습니다. 얼마만인가요"
  },
  {
    name: "Atmosphere",
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "",
  },
  {
    name: "Clear",
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny",
    subtitle: "맑은 날씨입니다."
  },
  {
    name: "Clouds",
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    subtitle: "구름이 많습니다."
  },
  {
    name: "Mist",
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Hails",
    subtitle: "우박이 떨어질 수도 있으니 조심하세요!"
  },
  {
    name: "Dust",
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "미세먼지가 많이 꼈으므로 조심하세요!"
  },
  {
    name: "Haze",
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "안개가 많이 꼈습니다"
  }
];