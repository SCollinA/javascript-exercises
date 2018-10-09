//Write a function which takes an array of city objects like such:
//as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function tempCities(citiesList) {
    citiesList = citiesList.map(city_object => {
        city_temp = city_object[`temperature`];
        if (city_temp < 70.0) {
            return `${city_object[`name`]}: ${city_object[`temperature`]} degrees`
        }
    })
    citiesList.forEach((city, index, list) => {
        if (city == undefined){
            list.splice(index, 1)
        }
    });
    return citiesList
}

console.log(tempCities(cities))
console.log(cities)