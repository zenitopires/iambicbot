from pattern.text.en import conjugate
from syllables import estimate
from random import choice
import sys

nouns, adverbs, verbs= [], [], []
pronoun = ['You', 'I', 'She', 'He', 'They', 'Mankind']
conjunctions = ['For', 'But', 'Yet', 'Nor', 'So']

with open('words/nouns') as f:
    nouns = f.read().splitlines()
with open('words/adverbs') as f:
    adverbs = f.read().splitlines()
with open('words/verbs') as f:
    verbs = f.read().splitlines()


def iambic_syllable(count):
    random_pronoun = choice(pronoun)
    random_noun = choice(nouns)
    random_adverb = choice(adverbs)
    random_verb = conjugate(choice(verbs), tense="past")
    random_verb2 = choice(verbs)
    random_noun2 = choice(nouns)
    conjunction = choice(conjunctions)
    random_verb3 = choice(verbs)

    iambic_phrase = random_pronoun + ' ' + random_adverb + \
                    ' ' + random_verb + ' the ' + random_noun + '.'
    iambic_phrase2 = '\n' + conjunction + ' ' + conjugate(random_verb2, tense="past") + \
                    ' the ' + random_noun2 + '.' + '\nI ' + random_verb3 + '.'

    iambic_phrase += iambic_phrase2

    if (estimate(iambic_phrase) == count):
        return iambic_phrase
    else:
        return iambic_syllable(count)

# Passing count from iambic.js is passed as string, change it into an int
count = int(sys.argv[1], base=10)

print(iambic_syllable(count))