# Iambic Pentameter Bot
A bot that posts iambic phrases of a specific syllabic count. Perhaps, the next William Shakespeare.<br>
<br>
See it live here https://twitter.com/the_iambic
---
## Requirements

For development, you'll need Node.js and npm.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

## Usage

### Downloading Iambic Bot

    $ git clone https://github.com/zenitopires/iambicbot
    $ cd iambicbot

### Configuring Authorization
Create a `config.js` file in the iambicbot directory and enter your Twitter authorization keys like so:
  ```
  module.exports = {
    consumer_key:         'API_key',
    consumer_secret:      'API_secret_key',
    access_token:         'Access_token',
    access_token_secret:  'Access_token_secret'
  }
  ```
  
### Configuring Time Between Bot Posts
In `bot.js`, adjust `cron.schedule()` to your desired time of when you want the bot to post. Check out the syntax for `cron.schedule()` [here](https://github.com/node-cron/node-cron/blob/master/README.md)

## Running Iambic Bot
    $ npm start
