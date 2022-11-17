import axios from "axios";
import moment from 'moment';  
import data from "./data.js";

const weatherApiToken = process.env.OPEN_WEATHER_MAP_API_TOKEN
const lat = process.env.HOME_LATITUDE
const long = process.env.HOME_LONGITUDE
const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${weatherApiToken}`

export  const getWeatherForecast = async () => {
    let report = "Weather Forecast for the day."
    try {
        const response = await axios.get(url);
        if(response.data.hourly){
            const now = moment()
            let hourArr = response.data.hourly
            hourArr.forEach(hourObj => {
              let dt = moment.unix(hourObj.dt);      
              if(dt.day() === now.day()){
                if( (dt.hour() >= 6 && dt.hour() <=10 ) || (dt.hour() >= 16 && dt.hour() <=19) ){
                    report += `\n ${dt.hour()}hrs : ${hourObj.weather[0].description}`
                }
              }
            })
        }else{
            console.log("response.data.hourly is not a thing")
        }
      } catch (error) {
        console.error(error);
      }
    console.log(report)
    return report
  }

export const isClearWeather = async () => {
    let isClearWeather = false
    try{
        const response = await axios.get(url);
        if(response.data.hourly){
            const now = moment()
            let hourArr = response.data.hourly
            hourArr.forEach(hourObj => {
              let dt = moment.unix(hourObj.dt);      
              if(dt.day() === now.day()){
                if( (dt.hour() >= 6 && dt.hour() <=10 ) || (dt.hour() >= 16 && dt.hour() <=19) ){
                    if([800,801,802,803].includes(hourObj.weather[0].id)){
                        isClearWeather = true
                    }
                }
              }
            })
        }
    }catch(error){
        console.log(error)
    }
    return isClearWeather
  }
