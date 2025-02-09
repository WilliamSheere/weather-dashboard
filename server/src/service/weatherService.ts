import dotenv from "dotenv";
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
class Weather {
	city: string;
	date: string;
	icon: string;
	iconDescription: string;
	tempF: number;
	windSpeed: number;
	humidity: number;
	constructor(
		city: string,
		date: string,
		icon: string,
		iconDescription: string,
		tempF: number,
		windSpeed: number,
		humidity: number
	) {
		this.city = city;
		this.date = date;
		this.icon = icon;
		this.iconDescription = iconDescription;
		this.tempF = tempF;
		this.windSpeed = windSpeed;
		this.humidity = humidity;
	}
}
// const { city, date, icon, iconDescription, tempF, windSpeed, humidity } =
// 	currentWeather;
// TODO: Complete the WeatherService class
class WeatherService {
	baseUrl?: string;
	apiKey?: string;
	constructor() {
		this.baseUrl = process.env.API_BASE_URL || "";
		this.apiKey = process.env.API_KEY || "";
	}
	// TODO: Define the baseURL, API key, and city name properties
	// TODO: Create fetchLocationData method
	// private async fetchLocationData(query: string) {}
	// TODO: Create destructureLocationData method
	// private destructureLocationData(locationData: Coordinates): Coordinates {}
	// TODO: Create buildGeocodeQuery method
	// private buildGeocodeQuery(): string {}
	// TODO: Create buildWeatherQuery method
	// private buildWeatherQuery(coordinates: Coordinates): string {}
	// TODO: Create fetchAndDestructureLocationData method
	// private async fetchAndDestructureLocationData() {}
	// TODO: Create fetchWeatherData method
	// private async fetchWeatherData(coordinates: Coordinates) {}
	// TODO: Build parseCurrentWeather method
	// private parseCurrentWeather(response: any) {}
	// TODO: Complete buildForecastArray method
	// private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
	// TODO: Complete getWeatherForCity method
	async getWeatherForCity(city: string) {
		console.log(city);
		const url = `${this.baseUrl}/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`;
		const currentWeather = await fetch(url);
		const currentWeatherJson = await currentWeather.json();
		// console.log(currentWeatherJson)
		const parsedCurrentWeather = new Weather(
			currentWeatherJson.name,
			currentWeatherJson.dt,
			currentWeatherJson.weather[0].icon,
			currentWeatherJson.weather[0].description,
			currentWeatherJson.main.temp,
			currentWeatherJson.wind.speed,
			currentWeatherJson.main.humidity
		);

		const forecastUrl = `${this.baseUrl}/data/2.5/forecast?q=${city}&units=imperial&appid=${this.apiKey}`;
		const forecast = await fetch(forecastUrl);
		const forecastJson = await forecast.json();
		console.log(forecastJson);
		return [parsedCurrentWeather];
	}
}

export default new WeatherService();
// loop through list and every 8 elements make new class weather
