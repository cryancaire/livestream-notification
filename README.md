# livestream-notification

### Stats
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cryancaire/livestream-notification?style=plastic)
![Lines of code](https://img.shields.io/tokei/lines/github/cryancaire/livestream-notification?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/cryancaire/livestream-notification?style=plastic)
[![Generic badge](https://img.shields.io/badge/Language-Javascript-yellow.svg?syle=plastic)](https://shields.io/)

![GitHub followers](https://img.shields.io/github/followers/cryancaire?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/cryancaire?style=social)

## What is this repo for?
With this repo you can make a command with whatever bot for your livestream that will send a notification to a discord channel via webhook.

## It looks something like this:
![Example Image](/images/image1.png)

## Well that seems neat... how do I use it?
Its pretty simple! Follow these directions and you'll be using it in no time!

1. Open your discord server and go to `Server Settings`
2. Click on `Integrations`
3. There is a section for `Webhooks`
4. You will either see `Create Webhook` or `View Webhooks` if you have webhooks already.
5. Click `View Webhooks` if its there, and then `Create Webhook` or just `Create Webhook` if thats the option you see.
6. Here you can change the image, name, and channel that this webhook has access to.
7. Once you have set up the webhook, click `Copy Webhook URL`
8. You will want to paste this somewhere and keep only the half after `https://discord.com/api/webhooks/`
9. Add a new command to your bot which will look something like this specifically for nightbot(though for different bots it can be slightly different)
    - $(urlfetch https://livestreamnotification.herokuapp.com/livenotification/[what you saved in step 8]/$(user)/[your channel name]/$(querystring))
    - replacing [what you saved in step 8] with... well exactly what you saved in step 8
    - replacing [your channel name] with your channel name
10. You can also do exactly what you did in step 9, but with one modification, updating the command to contain an `@` argument as below
    - $(urlfetch https://livestreamnotification.herokuapp.com/livenotification/[what you saved in step 8]/@/$(user)/[your channel name]/$(querystring))
    - This will make the command use the `@everyone` mention if you wish


### Now with setup out of the way
You can just use your command as follows (lets assume you set your command as `!live`)
- `!live https://twitch.tv/ccgamingtwitch`
- This will result in a message as shown in the screenshot above.
- Note: This does not only work for Twitch, it will work for any bot, independant of platform. (You just need to know how to get `$(user)` and `$(querystring)` equivalents in your bot for your platform) 
