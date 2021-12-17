const qMBB324 = [
    {
        Q: 'How many levels of protein structure are there?',
        A: '4'
    },
    {
        Q: 'What does the GPCR abbreviation stand for?',
        A: 'G Protein Connected Receptor'
    },
    {
        Q: 'What percentage of all proteins do membrane proteins make up?',
        A: '20-30'
    }
]
let score = 0

function randomizeIndex(qList) {
    let randMax = qList.length()

    let qIndex = Math.random() * randMax
    console.log(qIndex);
    
    for (const items in qList) {
        let response = window.prompt(qList[qIndex].Q);
        if(response === qList[qIndex].A) {
            score++;
            alert("Correct.");
        }else {
            alert("Incorrect.");
        }
    }
}

export {score, randomizeIndex, qMBB324};