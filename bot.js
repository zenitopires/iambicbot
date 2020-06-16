'use strict'

const twit = require('twit');
const cron = require('node-cron');
const config = require('./config');
const iambic = require('./iambic');

let Bot = new twit(config);

let tweet = '';
function tweetIambic(syllableCount) {
    tweet = iambic.iambicSyllable(syllableCount);
    Bot.post('statuses/update', { status: tweet }, function(err, data, response) {
        console.log(`Tweet posted: ${tweet}`);
    });
}

cron.schedule('0 */3 * * *', () => {
    tweetIambic(14);
});