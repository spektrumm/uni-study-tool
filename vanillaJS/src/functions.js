let score = 0

function randomizeList(qList) {
    let randMax = qList.length() //set a maximum for the random function based on the inputted list length

    let qIndex = Math.random() * randMax
    console.log(qIndex); //debug
    
    for (const items in qList) { // loop through given list, logging correct or incorrect
        console.log(qList[qIndex].Q);
        let response = window.prompt(qList[qIndex].Q); //scuffed temp input method
        if(response === qList[qIndex].A) {
            score++;
            alert('Correct.');
            console.log('Correct.');
        }else {
            alert('Incorrect.');
            console.log('Incorrect');
        }
    }
}

export {score, randomizeList};