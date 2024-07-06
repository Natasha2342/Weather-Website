const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3e8dbfd4c5msh9f9bdbb65a48bf5p125cd9jsn61d405f25313',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response);
			lat.innerHTML = response.location.lat
			lon.innerHTML = response.location.lon
			temp_c.innerHTML = response.current.temp_c
			humidity.innerHTML = response.current.humidity
			wind_mph.innerHTML = response.current.wind_mph
			wind_degree.innerHTML = response.current.wind_degree
			feelslike_c.innerHTML = response.current.feelslike_c
			country.innerHTML = response.location.country
			heatindex_c.innerHTML=response.current.heatindex_c
			localtime.innerHTML=response.location.localtime
			temp_f.innerHTML=response.current.temp_f
			dewpoint_c.innerHTML=response.current.dewpoint_c
			wind_dir.innerHTML=response.current.wind_dir
			windchill_c.innerHTML=response.current.windchill_c

		})
		.catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)

})

getWeather("Delhi")
