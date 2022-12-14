<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## About The Project
I walk my dog Linus twice a day. Sometimes, when weather patterns change, I am unable to take Linus for his walk for hours, waiting for the rain to stop. Linus walk alert is a notification app that notifies me via whatsapp messages, at predefined times througout the day, with warnings of any non zero chance of rain. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#lessons-learnt">Lessons Learnt</a></li>
    <li><a href="#limitations">Limitations</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](http://expressjs.com/)
* [Twilio](https://www.twilio.com/)
* [Open weather API](https://openweathermap.org/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anandxrfeu/linus-walk-alert.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

4. Configure environment variables. You will need to create an account with Twilio and Open Weather api. The .envCopy fle has some comments you may want to go through.

5. Run locally
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LESSON LEARNT -->
## Lessons Learnt
I wanted to build a low cost project. These are my lessons learnt while building this project. 
* Integration with whatsapp: Although facebook offers a whatsap business API, i choose Twilio as I found their documentation easier to work with. Twilio gives you a whatsapp sandbox that lets you recieve notifications from a shared number to upto 5 different phone numbers. Since me and my partner are the only person getting alerts, twilio`s restriction serves my purpose. Its important to note that Twilio service isnt free. One gets a credit of around $15 to start with. Although, I dont see this credit running out any time soon as each message costs $0.0025. 
* Integration with Open Weather Api: The service has good documentation and using then was easy. I subscribed to their One call API, which gives you fir the first 1000 api calls for free and then charges you based on usage. Luckily, they give an option to set api limits, which I have set to 1000 to not incur any costs. 
* Testing webhooks using ngrok. The flow when user sends a whatsapp message to get weather data is such that twilio calls a POST api request to app. This can be tested locally by using ngrok, by installing it and then running the following command. This creates a URL that can be then configured in twilio to test the web hook. 
```sh
   ngrok http 3003
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LIMITATIONS -->
## Limitations
* The Twilio whatsapp sandbox gives a shared number thtat sends notifications. Any reciepient that wants to get the notification, needs to register to this number by sending a codded message. This registration resets every 72 hours. As a workaround, I have I use shortcuts app on iphone to send resgistration message daily in an automated fashion. 


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact
* Anand Chelvan - [@anandxrfeu](https://twitter.com/anandxrfeu)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

