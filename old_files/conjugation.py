import sys

from pattern.text.en import conjugate

conjugated_verb = conjugate(sys.argv[1], tense="past")

print(conjugated_verb)
