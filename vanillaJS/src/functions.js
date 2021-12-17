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

export {score, randomizeIndex};