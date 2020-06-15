'use strict'

const childProc = require('child_process')

module.exports = {
    iambicSyllable:
    /**
     * Function that returns a random iambic 
     * phrase of a specific syllable count
     * @param {number} count 
     */
    function iambicSyllable(count) {
        const Python = childProc.spawnSync('python', ['./iambic.py', count]);
        let iambicPhrase =  Python.stdout.toString('utf-8');
        iambicPhrase = iambicPhrase.replace(/(\r\n|\n|\r)/gm, "");

        return iambicPhrase;
    }
}

/**
 * Function modifies verb into past-tense form
 * @param {string} verb
 */
function modifyVerb(verb) {
    const Python = childProc.spawnSync('python', ['./conjugation.py', verb]);
    let pastTense =  Python.stdout.toString('utf-8');
    return pastTense;
}