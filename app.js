//Livestream notification to Discord
//Created by Corey Caire aka CC Gaming
//On April 1, 2022 (Not as an April Fool's joke)

//discord-webhook-nodejs https://www.npmjs.com/package/discord-webhook-nodejs

//Description
//This will not automatically send to discord,
//but allow you to create a command in a stream
//that will send a notification to discord.

const { Webhook, MessageBuilder } = require('discord-webhook-nodejs');
require('dotenv').config();
const express = require('express');
const { urlencoded } = require('body-parser');
const app = express();

const port = process.env.PORT || 7890;

const WEBHOOK_BASE = "https://discord.com/api/webhooks/";

const server = app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});



app.get('/livenotification/:hookURL1/:hookURL2/:username/:channelName/:streamURL', async (req, res) => {
    const hook = new Webhook(`${WEBHOOK_BASE}${req.params.hookURL1}/${req.params.hookURL2}`);
    
    hook.setUsername(`${req.params.username}`);
    hook.send(`**${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);

    res.send("Notification sent!");

});

app.get('/livenotification/:hookURL1/:hookURL2/:notify/:username/:channelName/:streamURL', async (req, res) => {
    const hook = new Webhook(`${WEBHOOK_BASE}${req.params.hookURL1}/${req.params.hookURL2}`);
    
    hook.setUsername(`${req.params.username}`);
    
    if (req.params.notify === "@") {
        hook.send(`@everyone **${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);
    } else {
        hook.send(`**${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);
    }

    res.send("Notification sent!");

});