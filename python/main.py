import random
import json

randIndex = []
questionList = []


def make2DArray(list1, list2):
    print(0)


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


def askQuestion(qList, index):
    i = 0
    printIndex = randIndex[i]
    qNum = i + 1
    for question in range(len(qList)):
        print(f'Q{qNum}: {qList[printIndex][0]}')
        userIn = input('Enter your answer: ').lower()
        if userIn == qList[printIndex][1].lower():
            print('Correct.')
        else:
            print('Incorrect.')
        i += 1


askQuestion(questionList, randIndex)
