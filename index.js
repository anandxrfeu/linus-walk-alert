import express from "express"
import cron from "node-cron"
import dotenv from 'dotenv/config'
import sendMessage from "./utils/whatspp.js";
import {getWeatherForecast, isClearWeather} from "./utils/weather.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

cron.schedule('0 5,13 * * *', async () => {
    const isClear = await isClearWeather()
    if(!isClear){
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

  app.get("/", (req, res)=>{
    return res.status(200).json({ok: true})
  })

app.post('/notify', async (req, res) => {
    let message = req.body.Body;
    let senderID = req.body.From;
    let sendMesssage = "Quem é você?"
    const data = await getWeatherForecast()
    if(message.trim().toLowerCase() === "amore"){
        sendMesssage = "My Love." + " " + data
    }
    await sendMessage(sendMesssage, senderID);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});