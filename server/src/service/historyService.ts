// TODO: Define a City class with name and id properties
import fs from "node:fs/promises";
// TODO: Complete the HistoryService class
class HistoryService {
	// TODO: Define a read method that reads from the searchHistory.json file
	// private async read() {}
	// TODO: Define a write method that writes the updated cities array to the searchHistory.json file
	// private async write(cities: City[]) {}
	// TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
	async getCities() {
		const fileData = await fs.readFile("db/db.json", "utf8");
		return JSON.parse(fileData);
	}
	// TODO Define an addCity method that adds a city to the searchHistory.json file
	async addCity(city: string) {
		console.log("city", city);
		const cities = await this.getCities();
		console.log("cities", cities);
		cities.push({
			name: city,
		});
		fs.writeFile("db/db.json", JSON.stringify(cities));

		// use fs.writefilesync to add city to db.json
	}
	// * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
	// async removeCity(id: string) {}
}

export default new HistoryService();
