const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
import twilio from "twilio";

const client = twilio(accountSid, authToken, { 
    lazyLoading: true 
});

const sendMessage = async (message, senderID) => {

    try {
        await client.messages.create({
            to: senderID,
            body: message,
            from: process.env.SENDER
        });
    } catch (error) {
        console.log(`Error at sendMessage --> ${error}`);
    }
};

export default sendMessage;