// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9916d7feamsh117e96e32864888p1969fdjsn8dddd1b21d85',
		'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
	}

};

// fetch('https://ski-resort-forecast.p.rapidapi.com/Jackson%20Hole/forecast?units=i&el=Delhi',options)
fetch('https://ski-resort-forecast.p.rapidapi.com/Jackson%20Hole/forecast?city=i&el=Delhi',options)
.then(response=> response.json())
.then(response=> console.log(response))
.catch(err => console.error(err));