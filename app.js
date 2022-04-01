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
    const hook = new Webhook(WEBHOOK_BASE + req.params.hookURL + req.params.hookURL2);
    
    hook.setUsername(`${req.params.username}`);
    hook.send(`**${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);

    res.send("Notification sent!");

});

app.get('/livenotification/:hookURL1/:hookURL2/:notify/:username/:channelName/:streamURL', async (req, res) => {
    const hook = new Webhook(WEBHOOK_BASE + req.params.hookURL + req.params.hookURL2);
    
    hook.setUsername(`${req.params.username}`);
    
    if (req.params.notify === "@") {
        hook.send(`@everyone **${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);
    } else {
        hook.send(`**${req.params.channelName}** is live right now!\nCheck out the stream at ${req.params.streamURL}`);
    }

    res.send("Notification sent!");

});