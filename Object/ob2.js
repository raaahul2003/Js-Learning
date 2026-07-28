weatherData = [
    { district: 'Thrissur',   temp: 32 },
    { district: 'Kottayam',   temp: 29 },
    { district: 'Palakkad',   temp: 34 },
    { district: 'Eranakulam', temp: 33 },
    { district: 'Thrissur',   temp: 39 },
    { district: 'Kottayam',   temp: 30 },
    { district: 'Palakkad',   temp: 32 },
    { district: 'Eranakulam', temp: 31 }
]

// print districts with its highest temperature
// output { Thrissur: 32, Kottayam: 30, Palakkad: 34, Eranakulam: 33 }

let weather = {}
    weatherData.forEach(d => {
        let district = d.district
        let curtemp = d.temp

        if(weather.hasOwnProperty(district)){
            let oldTemp = weather[district]
            if(curtemp>oldTemp){
                weather[district]=curtemp
            }

        }else{
            weather[district] = curtemp 
        }
    })

    

    console.log(weather);