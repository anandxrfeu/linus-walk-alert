<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
I walk my dog Linus twice a day. Sometimes, when weather patterns change, i am unable to take Linus for his walk for hours waiting for the rain to stop. Linus walk alert is a notification app that notifies me via whatsapp message, at predefined times througout the day, a warning message if there is any chance of rain. 

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](http://expressjs.com/)
* [Twilio](https://www.twilio.com/)
* [Open weather API](https://openweathermap.org/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anandxrfeu/linus-walk-alert.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

4. Configure environment variables

5. Run locally
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LESSON LEARNT -->
## Lessons Learnt
I wanted to build a free of cost project. These are my lessons elarnt while building this project. 
* Integration with whatsapp: Although facebook offers a whatsap business API, i choose Twilio as I found their documentation easier to work with. Twilio gives you a whatsapp sandbox that lets you recieve notifications from a shared number to upto 5 different phone numbers. Since me and my partner are the only person getting alerts, twilio`s restriction serves my purpose. Its important to note that Twilio service isnt free. One gets a credit of around $15 to start with. Although, I dont see this credit running out any time soon as each message costs $0.0025. 
* Integration with Open Weather Api: The service has good documentation and using then was easy. I subscribed to their One call API, which gives you fir the first 1000 api calls for free and then charges you based on usage. Luckily, they give an option to set api limits, which I have set to 1000 to not incur any costs. 

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- CONTACT -->
## Contact
* Anand Naidu - [@anandxrfeu](https://twitter.com/anandxrfeu)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

