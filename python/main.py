import random
import json

randIndex = []
questionList = ['one', '2', 'three', 'e']


def randomizeQuestion(questionList):

    indexLength = len(questionList)
    q = 0
    while len(randIndex) != len(questionList):
        n = random.randrange(indexLength)
        if n in randIndex:
            q += 1
        else:
            randIndex.append(n)
            q += 1

    return(randIndex)


randomizeQuestion(questionList)  # call function

print(randIndex)  # debug
i = 0
# loop to print out questions ordered in the randomized order previously generated
for questions in range(len(questionList)):
    printIndex = randIndex[i]
    qNum = i + 1
    print(f'Q{qNum}: {questionList[printIndex]}')
    i += 1
