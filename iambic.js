'use strict'

const fs = require('fs');
const syllable = require('syllable');

let noun, verb, adjective, adverb, pronoun = [];
noun = fs.readFileSync('./words/nouns', 'utf-8').split('\n');
verb = fs.readFileSync('./words/verbs', 'utf-8').split('\n');
adjective = fs.readFileSync('./words/adjectives', 'utf-8').split('\n');
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
 * Function modifies verb ending depending on last character
 * To-Do: Account for other vowels and consonants and find
 *        their appropriate verbs
 * @param {array of verbs} verb
 */
function modifyVerb(verb) {
    switch (verb.charAt(verb.length - 1)) {
        case 'e':
            return verb + 'd';
        default:
            return verb;
    }
}