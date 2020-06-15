'use strict'

const fs = require('fs');
const syllable = require('syllable');
const childProc = require('child_process')

let noun, verb, adverb, pronoun = [];
noun = fs.readFileSync('./words/nouns', 'utf-8').split('\n');
verb = fs.readFileSync('./words/verbs', 'utf-8').split('\n');
adverb = fs.readFileSync('./words/adverbs', 'utf-8').split('\n');
pronoun = ['You', 'I', 'She', 'He', 'They', 'Mankind'];

module.exports = {
    iambicSyllable:
    /**
     * Function that returns a random iambic 
     * phrase of a specific syllable count
     * @param {number} count 
     */
    function iambicSyllable(count) {
        let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
        let randomNoun = noun[Math.floor(Math.random() * noun.length)];
        let randomVerb = verb[Math.floor(Math.random() * verb.length)];
        let randomAdverb = adverb[Math.floor(Math.random() * adverb.length)];

        randomVerb = modifyVerb(randomVerb);

        randomVerb = randomVerb.replace(/(\r\n|\n|\r)/gm, "");

        let iambicPhrase = randomPronoun + ' ' + randomAdverb + ' ' + randomVerb + ' ' + randomNoun + '.';

        if (syllable(iambicPhrase) == count) {
            return iambicPhrase;
        }
        else {
            return iambicSyllable(count);
        }
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