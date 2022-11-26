import express from "express"
import cron from "node-cron"
import dotenv from 'dotenv/config'
import sendMessage from "./utils/whatspp.js";
import {getWeatherForecast, isClearWeather} from "./utils/weather.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//cron.schedule('0 5,13 * * *', async () => {

/**
 * The cron job is commented as the schedule responsibility is being handled by cyclic.sh
 * 
 
cron.schedule('0 5,13 * * *', async () => {
  console.log("Scheduler activated!!")
    const isClear = await isClearWeather()
    if(!isClear){
        console.log("Weather is NOT clear!!")
        const data = await getWeatherForecast()
        await sendMessage(data, process.env.REC1PIENT_1);
        await sendMessage(data, process.env.REC1PIENT_2);
    }else{
        console.log("Weather is clear!!")
    }
  }, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
  });
 */



  app.get("/", (req, res)=>{
    return res.status(200).json({ok: true})
  })

/**
 * Schedule.sh calls this end point
 */

app.post("/schedule", async (req, res)=>{
  console.log("API Scheduler activated!")
    const isClear = await isClearWeather()
    if(!isClear){
        console.log("Weather is NOT clear!!")
        const data = await getWeatherForecast()
        await sendMessage(data, process.env.REC1PIENT_1);
        await sendMessage(data, process.env.REC1PIENT_2);
    }else{
        console.log("Weather is clear!!")
    }
    return res.status(200).json() 
})

app.post('/notify', async (req, res) => {
    let message = req.body.Body;
    let senderID = req.body.From;
    let sendMesssage = process.env.DEFAULT_REPLY
    if(message.trim().toLowerCase() === process.env.INCOMMING_MESSAGE_KEYWORD){
        const data = await getWeatherForecast()
        sendMesssage = process.env.SALUTAION_PHRASE + " " + data
    }
    await sendMessage(sendMesssage, senderID);
})

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});