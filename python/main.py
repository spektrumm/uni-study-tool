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


randomizeQuestion(questionList)

print(randIndex)
i = 0
for questions in range(len(questionList)):
    printIndex = randIndex[i]
    qNum = i + 1
    print(f'Q{qNum}: {questionList[printIndex]}')
    i += 1
